import { createAction } from 'redux-actions';

// 1. 向服务器发送请求，告诉服务器我们将哪一个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart');

// 2.将商品添加到本地的购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart');

// 3.向服务器端发送请求，获取购物车列表数据
export const loadCarts = createAction('loadCarts');

// 4.将服务器返回的数据，同步到本地的购物车中
export const saveCarts = createAction('saveCarts');

// 向服务器发送请求告诉服务器删除哪个商品
export const deleteProductFormCart = createAction('deleteProductFormCart');

// 删除本地购物车中的商品
export const deleteProductFormLocalCart = createAction('deleteProductFormLocalCart');

// 向服务器发送请求，告诉服务器我们将哪一个商品的数量更改成什么
export const changeServiceProductNumber = createAction('changeProductNumber');

// 更新本地购物车中商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber');