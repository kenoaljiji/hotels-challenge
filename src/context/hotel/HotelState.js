import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import HotelContext from './hotelContext';
import HotelReducer from './hotelReducer';
import setAuthToken from '../setAuthToken';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  LOGOUT,
  CLEAR_ERRORS,
  ADD_HOTELS,
  DETAILS_HOTEL,
  REVIEW_HOTEL,
  FAVORITE_HOTEL,
  HOTELS_ERROR
} from '../types'

const HotelState = props => {
    const initialState = {
        hotels: [],
        details: null,
        loading: true,
        isAuthenticated: null,
        token: localStorage.getItem('token'),
        user: [],
        error: null

    }

    const [state, dispatch] = useReducer(HotelReducer, initialState)


     // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('http://127.0.0.1:8000/register/', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',

      }
    };

    try {
      const res = await axios.post('http://127.0.0.1:8000/api-token-auth/', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors
      });
    }
  };

  //Get All Hotels Data

  
  const allHotels = async () => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${state.user.token}`
    }
    };
    try {
      const res = await axios.get('http://127.0.0.1:8000/hotel_api/', config);

      dispatch({
        type: ADD_HOTELS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: HOTELS_ERROR,
        payload: error.response
      });
    }
  };


  // Logout
  const logout = () => dispatch({ type: LOGOUT });






    const setLoading = () => dispatch({ type: SET_LOADING });

    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });



    return <HotelContext.Provider 
    value={{
        hotels: state.hotels,
        loading: state.loading,
        token:state.token,
        user: state.user,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        clearErrors,
        register,
        login,
        logout,
        setLoading,
        allHotels

    }}
>

    {props.children}
    </HotelContext.Provider>



}

export default HotelState
