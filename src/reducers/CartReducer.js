export default function(state = [], action){
	if(action.type == "UPDATE_CART"){
		return action.payLoad;
	}else{
		return state;
	}

}