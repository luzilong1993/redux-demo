import { takeEvery, put } from 'redux-saga/effects';
import { addProductToCart, addProductToLocalCart, deleteProductFormCart, deleteProductFormLocalCart, loadCarts, saveCarts } from '../actions/cart.actions';
import axios from 'axios';

// 将商品添加到购物车中
function* handleAddProductToCart(action) {
    const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload });
    yield put(addProductToLocalCart(data));
}

// 获取购物车列表
function* handleLoadCarts() {
    const { data } = yield axios.get('http://localhost:3005/cart');
    yield put(saveCarts(data));
}

// 删除商品
function* handleDeleteProductFormCart(action) {
    const { data } = yield axios.delete('http://localhost:3005/cart/delete', { params: {
        cid: action.payload
    } });
    yield put(deleteProductFormLocalCart(data.index))
}

export default function* cartSaga() {
    // 将商品添加到购物车中
    yield takeEvery(addProductToCart, handleAddProductToCart);
    // 获取购物车列表
    yield takeEvery(loadCarts, handleLoadCarts);
    // 删除商品
    yield takeEvery(deleteProductFormCart, handleDeleteProductFormCart)
}