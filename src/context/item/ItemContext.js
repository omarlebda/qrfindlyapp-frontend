import React, { createContext, useReducer, useEffect } from "react";
import ItemReducer from './itemReducer'
import axios from 'axios'




const APIsURL = 'http://localhost:3000'
const ItemContext = createContext();

export const ItemProvider =({children}) =>{
    const initialState = {
        items: [],
    };

    const [state, dispatch] = useReducer(ItemReducer, initialState)

    

    useEffect(()=>{
      getItems()
    }, [])

    //Get items
    const getItems = async () => {
        const token = localStorage.getItem('token')
        try {
            const res = await axios.get(`${APIsURL}/items`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            });
            console.log("Get Items", res.data)
            dispatch({
                type: 'GET_ITEMS',
                payload: {
                  items: res.data,
                },
              });
            return res.data
        } catch (error) {
            console.log(error)
        }

    }

    //Add item
    const addItem = async (file, itemName) => {
      const token = localStorage.getItem('token')
      const formData = new FormData();
      formData.append("itemPicture", file);
      formData.append("itemName", itemName);
      try {
        const res = await fetch(`${APIsURL}/items`, {
          method: "POST",
          headers:{
            'Authorization': `Bearer ${token}`
          },
          body: formData,
        })
        const data = await res.json()
          dispatch({
              type: 'ADD_ITEM',
              payload: {
                newItem: data,
              },
            });
      } catch (error) {
        console.log(error)
      }

  }



  



    return (
        <ItemContext.Provider
          value={{
            ...state,
            getItems,
            items : state.items, 
            addItem
          }}
        >
          {children}
        </ItemContext.Provider>
      )

}


export default ItemContext