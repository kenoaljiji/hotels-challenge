import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS,
    ADD_HOTELS,
    SET_LOADING,
    DETAILS_HOTELS,
    REVIEWS_HOTELS
  } from '../types'

  export default (state, action) => {
    switch (action.type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload
        };
      case SET_LOADING:
        return {
            ...state,
            loading: true
        }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          loading: false
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          hotels: [],
          error: null
        };

      case ADD_HOTELS:
          return {
            ...state,
            hotels: action.payload,
            loading: false
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        };
      
      default:
        return state;
    }
  };
  