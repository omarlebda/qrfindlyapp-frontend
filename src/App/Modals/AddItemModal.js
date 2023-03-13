import React, {useContext, useState} from 'react'
import UserContext from '../../context/user/UserContext'
import ItemContext from '../../context/item/ItemContext'
import {
    Modal,
    ModalBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    ModalHeader,
    Input,
    InputGroupAddon,
    InputGroup,
    InputGroupText,
    CustomInput
} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import classnames from 'classnames'
import ManAvatar4 from '../../assets/img/man_avatar4.jpg'

function EditProfileModal(props) {
    const APIsURL = 'http://localhost:3000'
    const [file, setFile] = useState();
    const [itemName, setItemName] = useState("");
    const {user, editUser, uploadAvatar} = useContext(UserContext)
    const {addItem} = useContext(ItemContext)
    const handleChange = (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }else{
            setItemName(e.target.value)
        }
    };



    const handleSubmit = async (e) =>{
        e.preventDefault()
        const token = localStorage.getItem('token')
        try {
            addItem(file, itemName)
        } catch (error) {
            console.log(error)
        }
        props.toggle()
    }
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} centered className="modal-dialog-zoom">
                <ModalHeader toggle={props.toggle}>
                    <FeatherIcon.Edit2 className="mr-2"/> Add Item
                </ModalHeader>
                <ModalBody>
                    <Form>

                                <FormGroup>
                                    <Label for="itemname">Item Name</Label>
                                    <InputGroup>
                                        <Input type="text" value={itemName} onChange={handleChange} name="firstname" id="firstname"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="avatar">Item Picture</Label>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <figure className="avatar mr-3 item-rtl">
                                                <img src={ManAvatar4} className="rounded-circle" alt="avatar"/>
                                            </figure>
                                        </div>
                                        <CustomInput  onChange={handleChange} type="file" id="exampleCustomFileBrowser" name="itemPicture"/>
                                    </div>
                                </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSubmit} color="primary">Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditProfileModal
