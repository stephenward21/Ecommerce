import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import RegisterReducer from './RegisterReducer';

const rootReducer = combineReducers({
	registerReducer: RegisterReducer


});

export default rootReducer;