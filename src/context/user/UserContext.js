import React, { createContext, useReducer, useEffect } from "react";
import UserReducer from './UserReducer'
import axios from 'axios'




const APIsURL = 'http://localhost:3000'
const UserContext = createContext();

export const UserProvider =({children}) =>{
    const initialState = {
        user: null,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState)



    useEffect( () => {
        getUser()
    }, []);


    //Get User
    const getUser = async () => {
        const token = localStorage.getItem('token')
        try {
            const res = await axios.get(`${APIsURL}/users/me`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            });
            console.log("Get User", res.data)
            localStorage.setItem('user', res.data)
            dispatch({
                type: 'GETUSER',
                payload: {
                  user: res.data,
                },
              });
        } catch (error) {

            console.log(error)
        }

    }

    //edit user
    const editUser = async (editFormData) => {
      const token = localStorage.getItem('token')
      try {
          const res = await axios.patch(`${APIsURL}/users/me`, editFormData, {
              headers: {
                  'Authorization': `Bearer ${token}`
                }
          });
          dispatch({
              type: 'GETUSER',
              payload: {
                user: res.data,
              },
            });
      } catch (error) {

          console.log(error)
      }

  }



  //Upload Avatar
  const uploadAvatar = async (file) => {
    const token = localStorage.getItem('token')
      try {
          
          const formData = new FormData();
          formData.append("avatar", file);
          const res = await fetch(`${APIsURL}/users/me/avatar`, {
            method: "POST",
            headers:{
              'Authorization': `Bearer ${token}`
            },
            body: formData,
          })
          getUser()
      } catch (error) {
          console.log(error)
      }
  }




    return (
        <UserContext.Provider
          value={{
            ...state,
            user: state.user,
            editUser,
            uploadAvatar,
            getUser
          }}
        >
          {children}
        </UserContext.Provider>
      )

}


export default UserContext