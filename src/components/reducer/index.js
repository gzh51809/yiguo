

import {combineReducers} from 'redux';
import good from './goodlist.js';

const rootReducer = combineReducers({
    good:good
});
export default rootReducer;