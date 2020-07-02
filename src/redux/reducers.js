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
} from "./actions/actionTypes"

const initialState = {
  orders: [],
  products: [],
  loading: false,
  success: false,
  fail: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: true,
        fail: false,
      }
    case CREATE_ORDER_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        success: false,
        fail: true,
      }
    case CREATE_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: false,
        success: true,
        fail: false,
      }
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
      }
    case FETCH_ORDER_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        success: true,
        fail: false,
      }
    case FETCH_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        success: true,
        fail: false,
      }
    case FETCH_PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        success: true,
        fail: false,
      }
    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
      }
    case UPDATE_ORDER_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        success: true,
        fail: false,
      }
    case UPDATE_ORDER_REQUEST_SUCCESS:
      const updatedState = state.orders.map((order) => {
        if (order._id === action.payload._id) {
          return action.payload
        }
        return order
      })
      return {
        ...state,
        orders: updatedState,
        loading: false,
        success: true,
        fail: false,
      }
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
      }
    case DELETE_ORDER_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        success: true,
        fail: false,
      }
    case DELETE_ORDER_REQUEST_SUCCESS:
      const updatedResult = state.orders.filter((order) => order._id !== action.payload.id)
      return {
        ...state,
        orders: updatedResult,
        loading: false,
        success: true,
        fail: false,
      }
    default:
      return state
  }
}
