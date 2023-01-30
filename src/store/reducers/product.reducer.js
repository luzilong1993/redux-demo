import { handleActions as createReducer } from 'redux-actions';
import { saveProducts } from '../actions/product.actions';

const initialState = [];

const handleSaveProducts = (state, action) => {
    return action.payload
}

export default createReducer({
    // 将商品列表数据保存到本地store中
    [saveProducts]: handleSaveProducts
}, initialState)