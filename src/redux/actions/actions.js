import apiClient from '../axiosConfig';
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_REQUEST_FAIL,
  CREATE_ORDER_REQUEST_SUCCESS,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_REQUEST_SUCCESS,
  FETCH_ORDER_REQUEST_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_REQUEST_SUCCESS,
  UPDATE_ORDER_REQUEST_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_REQUEST_SUCCESS,
  DELETE_ORDER_REQUEST_FAIL,
  FETCH_PRODUCT_REQUEST_SUCCESS,
} from './actionTypes';


const productFetchSuccess = payload => ({
  type: FETCH_PRODUCT_REQUEST_SUCCESS ,
  payload,
});

const orderCreation = payload => ({
  type: CREATE_ORDER_REQUEST,
});
const orderCreationSuccess = payload => ({
  type: CREATE_ORDER_REQUEST_SUCCESS ,
  payload,
});
const orderCreationFail = error => ({
  type: CREATE_ORDER_REQUEST_FAIL,
  error,
});

const orderFetch = payload => ({
  type: FETCH_ORDER_REQUEST,
});
const orderFetchSuccess = payload => ({
  type: FETCH_ORDER_REQUEST_SUCCESS ,
  payload,
});
const orderFetchFail = error => ({
  type: FETCH_ORDER_REQUEST_FAIL,
  error,
});

const orderUpdate = payload => ({
  type: UPDATE_ORDER_REQUEST,
});
const orderUpdateSuccess = payload => ({
  type: UPDATE_ORDER_REQUEST_SUCCESS ,
  payload,
});
const orderUpdateFail = error => ({
  type: UPDATE_ORDER_REQUEST_FAIL,
  error,
});

const orderDelete = payload => ({
  type: DELETE_ORDER_REQUEST,
});
const orderDeleteSuccess = payload => ({
  type: DELETE_ORDER_REQUEST_SUCCESS ,
  payload,
});
const orderDeleteFail = error => ({
  type: DELETE_ORDER_REQUEST_FAIL,
  error,
});

export const createOrder= (data) => async (dispatch) => {
  const url = 'api/orders';
  console.log(data)
  dispatch(orderCreation());
  try {
    const result = await apiClient('POST', url, {data});
    dispatch(orderCreationSuccess(result.data));
  } catch (error) {
    dispatch(orderCreationFail(error));
  }
};

export const fetchProducts= () => async (dispatch) => {
  const url = 'api/products';
  try {
    const result = await apiClient('GET', url, {});
    dispatch(productFetchSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrders= () => async (dispatch) => {
  const url = 'api/orders';
  dispatch(orderFetch());
  try {
    const result = await apiClient('GET', url, {});
    dispatch(orderFetchSuccess(result.data));
  } catch (error) {
    dispatch(orderFetchFail(error));
  }
};

export const updateOrders= (id, data) => async (dispatch) => {
  const url = `api/orders/${id}`;
  dispatch(orderUpdate());
  try {
    const result = await apiClient('PUT', url, {data});
    dispatch(orderUpdateSuccess(result.data));
  } catch (error) {
    dispatch(orderUpdateFail(error));
  }
};

export const deleteOrders= (data) => async (dispatch) => {
  const url = `api/orders/${data}`;
  dispatch(orderDelete());
  try {
    const result = await apiClient('DELETE', url, {data});
    dispatch(orderDeleteSuccess(result.data));
  } catch (error) {
    dispatch(orderDeleteFail(error));
  }
};

