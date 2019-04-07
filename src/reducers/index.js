import { combineReducers } from 'redux';
import calculationReducer from './calculationReducer';


export default combineReducers ({
    calculation: calculationReducer
});