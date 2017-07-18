import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import RegisterReducer from './RegisterReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
	registerReducer: RegisterReducer,
	cartReducer: CartReducer


});

export default rootReducer;