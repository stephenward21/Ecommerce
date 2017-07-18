var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config')
var bcrypt = require('bcrypt-nodejs');
var randToken = require('rand-token');

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

connection.connect();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/productlines/get', (req,res) => {
	const selectQuery = "SELECT * FROM productlines"
	connection.query(selectQuery, (error,results,fields)=>{
		if (error){
			res.json(error)
		}else{
			res.json(results)
		}
	})
})

router.get('/productlines/:productLines/get', (req,res)=>{
	// res.json({msg: 'test'});
	const pl = req.params.productLines
	var plQuery = `SELECT * FROM productLines
		INNER JOIN products ON productlines.productLine = products.productLine
		WHERE link = ?`
	connection.query(plQuery, [pl], (error,results)=>{
		if (error) throw error;
		res.json(results)
	});
})

router.post('/getCart',(req, res)=>{
	const getUidQuery = `SELECT id from users WHERE token = ?`
	connection.query(getUidQuery,[req.body.token],(error,results)=>{
		const getCartTotals = `SELECT SUM(buyPrice) as totalPrice, count(buyPrice) as totalItems FROM cart 
			INNER JOIN products ON products.productCode = cart.productCode WHERE uid=?`
		connection.query(getCartTotals,[results[0].id],(error3,results3)=>{
			if(error3){
				res.json(error3)
			}else{
				const getCartContents = `SELECT * FROM cart
				INNER JOIN products on products.productCode = cart.productCode 
				WHERE uid = ?`
				connection.query(getCartContents,[results[0].id],(error4,results4)=>{
					var finalCart = results3[0];
					finalCart.products = results4
					res.json(finalCart);
				})
			}
		})

	})
})

router.post('/updateCart', (req, res)=>{
	console.log(req.body)
	const getUidQuery = `SELECT id from users WHERE token = ?`
	connection.query(getUidQuery,[req.body.token],(error,results)=>{
		if(error) throw error;
		if(results.length == 0 ){
			res.json({msg:"badToken"})
		}else{
			const addToCartQuery = `INSERT INTO cart (uid,productCode) 
				VALUES (?,?)`;
			connection.query(addToCartQuery,[results[0].id,req.body.productCode],(error2,results2)=>{
				const getCartTotals = `SELECT SUM(buyPrice) as totalPrice, count(buyPrice) as totalItems FROM cart 
					INNER JOIN products ON products.productCode = cart.productCode WHERE uid=?`
				connection.query(getCartTotals,[results[0].id],(error3,results3)=>{
					if(error3){
						res.json(error3)
					}else{
						res.json(results3[0]);
					}
				})
			})
		}
	});

});


router.post('/register', (req,res)=>{
	console.log(req.body)
	const salesRepQ = "SELECT firstName, lastName FROM employees WHERE jobTitle = Sales Rep"

	const name = req.body.name;
	const email = req.body.email;
	const userName = req.body.username;
	const password = bcrypt.hashSync(req.body.password);
	const city = req.body.city;
	const state = req.body.state;
	const salesRep = req.body.salesRep;
	const creditLimit = 1600000

	

	const checkEmail = new Promise((resolve, reject) => {
		const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
		connection.query(checkEmailQuery,[email],(error,results)=>{
			if(error) throw error;
			if(results.length > 0){
				reject(console.log({msg: "userAlreadyExists"}));
			}else{
				// we dont care about results. Just that there isn't a match
				resolve();
			}
		})
	})

	checkEmail.then(
		()=>{

			var insertIntoCust = "INSERT INTO customers (customerName, city, state, salesRepEmployeeNumber, creditLimit) VALUES (?,?,?,?,?)"
			connection.query(insertIntoCust, [name,city,state,1337,creditLimit], (error, results)=>{
				console.log(error)
				console.log(results)
				const newId = results.insertId
				var curTimeStamp = Date.now() / 1000;
				var token = randToken.uid(40);
				var insertQuery = "INSERT INTO users (uid,name,username,email,password,created,token) VALUES (?,?,?,?,?,?,?)"
				connection.query(insertQuery, [newId, name, userName, email, password, curTimeStamp, token], (error2,results2)=>{
					if(error2){
						msg: error2
					}else{
						res.json({
							msg: "userInserted",
							token: token,
							name: name
						});
					}
				});
			});

		}
	).catch(
		(error)=>{
			res.json(error)
		}
	)

})

router.post('/login', (req,res)=>{
	var userName = req.body.username;
	var password = req.body.password;
	var checkLoginQuery = "SELECT * FROM users WHERE username = ?"
	connection.query(checkLoginQuery, [username], (error,results)=>{
		if(error) throw error;
		if(results.length === 0){
			res.json({
				msg: "badUsername"
			})
		}else{
			var checkHash = bcrypt.compareSync(password, results[0].password);
			if(checkHash){
				const updateToken = `Update users SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR)
					WHERE username = ?`
				var token = randToken.uid(40);
				connection.query(updateToken, [token,userName], (results2, error2)=>{
					res.json({
						msg:'loginSuccess',
						name: results[0].name,
						token: token
					})
				})

			}else{
				res.json({
					msg: "wrongPassword"
				})
			}
		}

	})
})



module.exports = router;
