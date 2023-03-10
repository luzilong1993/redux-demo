import { handleActions as createReducer } from 'redux-actions';
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFormLocalCart, saveCarts } from '../actions/cart.actions'

const initialState = []

// 将商品添加到本地的购物车数据中
const handleAddProductToLocalCart = (state, action) => {
    // 1.要添加的商品没有在购物车中  直接添加
    // 2.要添加的商品已经在购物车中  将商品的数量加一

    // 将原有的购物车数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    // 查找商品
    const product = newState.find(product => product.id === action.payload.id);
    if (product) {
        product.count = product.count + 1;
    } else {
        // 商品没有在购物车中
        newState.push(action.payload);
    }
    return newState;
}

const handleSaveCarts = (state,action) => action.payload;

const handleDeleteProductFormLocalCart = (state,action) => {
    // 将原有的购物车数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    newState.splice(action.payload,1);
    return newState;
}

const handleChangeLocalProductNumber = (state,action) => {
    // 将原有的购物车数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    const product = newState.find(product => product.id === action.payload.id);
    product.count = action.payload.count;
    return newState;
}

export default createReducer({
    // 将商品添加到本地的购物车数据中
    [addProductToLocalCart]: handleAddProductToLocalCart,
    // 将购物车列表添加到本地中
    [saveCarts]: handleSaveCarts,
    // 删除本地购物车中商品
    [deleteProductFormLocalCart]: handleDeleteProductFormLocalCart,
    // 更新购物车中商品的数量
    [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)