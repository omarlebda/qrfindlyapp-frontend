import React, { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer'
import axios from 'axios'

const APIsURL = 'http://localhost:3000'
const AuthContext = createContext();


export const AuthProvider =({children}) =>{
    const initialState = {
        isAuthenticated: false,
        user: null,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const register = async (RegFormData) => {
        const config = {
          headers: { 'Content-Type': 'application/json' },
        };
        const body = JSON.stringify(RegFormData);
    
        try {
          const res = await axios.post(`${APIsURL}/users`, body, config);
          localStorage.setItem('token', res.data.token);;
          dispatch({
            type: 'LOGIN',
            payload: {
              user: res.data.user,
            },
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

    return (
        <AuthContext.Provider
          value={{
            ...state,
            register,
          }}
        >
          {children}
        </AuthContext.Provider>
      )

}

export default AuthContext
