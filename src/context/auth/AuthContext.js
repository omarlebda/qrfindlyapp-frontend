import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from './AuthReducer'
import axios from 'axios'

const APIsURL = 'http://localhost:3000'
const AuthContext = createContext();


export const AuthProvider =({children}) =>{
    const isToken = localStorage.getItem('token')
    const initialState = {
        isAuthenticated: isToken? true : false,
    };


    useEffect( () => {
      if (isToken) {
           initialState.isAuthenticated = true;
           initialState.user = localStorage.getItem('user')
      }
    });
  

    const [state, dispatch] = useReducer(AuthReducer, initialState)



    //Register Function
    const register = async (RegFormData) => {
        const config = {
          headers: { 'Content-Type': 'application/json' },
        };
        const body = JSON.stringify(RegFormData);
    
        try {
          const res = await axios.post(`${APIsURL}/users`, body, config);
          localStorage.setItem('token', res.data.token);
          dispatch({
            type: 'LOGIN',
          });
          return {
            status: 'success',
            error: null
          }
        } catch (err) {
          return {
            status: 'fail',
            error: err
          };
        }
      };



    //Login Function
    const logIn = async (email, password) => {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const body = JSON.stringify({ email, password });

      try {
        const res = await axios.post(`${APIsURL}/users/login`, body, config);
        localStorage.setItem('token', res.data.token);
        // dispatch({
        //   type: 'LOGIN',
        // });
        return {
          status: 'success',
          error: null
        }
      } catch (err) {
          return {
            status: 'fail',
            error: err
          };
      }
  };

  //Logout
  const logOut = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`${APIsURL}/users/logout`, {
        method: "POST",
        headers:{
          'Authorization': `Bearer ${token}`
        },
      })
      localStorage.removeItem('token');
      dispatch({
        type: 'LOGOUT',
      });
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <AuthContext.Provider
          value={{
            ...state,
            register,
            logIn,
            logOut,
            isAuthenticated: state.isAuthenticated,
          }}
        >
          {children}
        </AuthContext.Provider>
      )

}

export default AuthContext
