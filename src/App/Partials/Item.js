import React, {useState, useEffect, useContext} from 'react'
import {Label, Button} from 'reactstrap'
import ItemCard from './ItemCard'
import AddItemModal from '../Modals/AddItemModal'
import ItemContext from '../../context/item/ItemContext'
function Item() {

  const [addItemOpen, setAddItemOpen] =  useState(false)
  const addItemModalToggle = () => setAddItemOpen(!addItemOpen);
  const {getItems, items} = useContext(ItemContext)

  useEffect(()=>{
    console.log('items', items)
}, [])
  return (
    <>
      <AddItemModal  modal={addItemOpen} toggle={addItemModalToggle}/>
      <div className='chat-header'>
            <div className="d-flex align-items-center">
              <h5>Items</h5>
          </div>
      </div>
      <div className='chat-body'>
          <div className='all-items-container'>
          {items.map((item) => ( 
            <ItemCard key={item?._id} item={item}/>
          ))}
              {/* <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/> */}
           
          </div>
          
      </div>
      <div className='chat-footer'>
        <Button onClick={addItemModalToggle} className="btn btn-light">Add Item</Button>
      </div>
    </>
  )
}

export default Item