import React, {useState} from 'react'
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
                                        <Input type="text" name="firstname" id="firstname"/>
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
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile"/>
                                    </div>
                                </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditProfileModal