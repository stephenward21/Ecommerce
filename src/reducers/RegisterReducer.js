// a reducer is a function that returns a piece of state...

export default function(state = [], action){
	if(action.type == "REGISTER"){
		return action.payLoad;
	}else{
		return state;
	}

}