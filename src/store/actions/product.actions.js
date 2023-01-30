import { createAction } from 'redux-actions';

// 向服务器端发送请求，获取商品列表数据
export const loadProducts = createAction('load products');
// 将服务器端返回的数据，保存在本地store中
export const saveProducts = createAction('save products');