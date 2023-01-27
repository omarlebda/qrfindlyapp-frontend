import React, {useState} from 'react'
import {Label, Button} from 'reactstrap'
import ItemCard from './ItemCard'
import AddItemModal from '../Modals/AddItemModal'
function Item() {
  const [addItemOpen, setAddItemOpen] =  useState(false)
  const addItemModalToggle = () => setAddItemOpen(!addItemOpen);

  return (
    <>
      <AddItemModal  modal={addItemOpen} toggle={addItemModalToggle}/>
      <div className='chat-header'>
            <div className="d-flex align-items-center">
              <h5>Items</h5>
          </div>
      </div>
      <div className='chat-body'>
          <div className='item-list'>
            <div className='m-2'>
              <ItemCard/>
            </div>
            <div className='m-2'>
              <ItemCard/>
            </div>
            <div className='m-2'>
              <ItemCard/>
            </div>

          </div>
          
      </div>
      <div className='chat-footer'>
        <Button onClick={addItemModalToggle} className="btn btn-light">Add Item</Button>
      </div>
    </>
  )
}

export default Item