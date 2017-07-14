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

router.post('/register', (req,res)=>{
	console.log(req.body)

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
				var userNameCheck = "SELECT * FROM users WHERE username = " + userName;
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

	// var insertQuery = "INSERT INTO users (username,password) VALUES (?,?)";
	// connection.query(insertQuery, [name,password],(error,results)=>{
	// 	if(error){
	// 		res.json({
	// 			msg: error
	// 		})
	// 	}else{
	// 		res.json({
	// 			msg: "userInserted"
	// 		})
	// 	}

	// });

})

module.exports = router;
