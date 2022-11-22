import { combineReducers } from 'redux';
import goodsReducer from './goodsCounter';
import stockReducer from './stockCounter';

//여러개의 리듀서 합치기
const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});

export default rootReducer;