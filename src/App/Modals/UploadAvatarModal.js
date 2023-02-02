import React, {useState, useContext} from 'react'
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
import UserContext from '../../context/user/UserContext'


function UploadAvatarModal(props) {
    const [file, setFile] = useState();
    const {user, editUser, uploadAvatar} = useContext(UserContext)
    const handleFileChange = (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
          return;
        }

        uploadAvatar(file)
        props.toggle()
      };

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} centered className="modal-dialog-zoom">
                <ModalHeader toggle={props.toggle}>
                    <FeatherIcon.Edit2 className="mr-2"/> Upload Avatar
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                                        <Label for="avatar">Avatar</Label>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <figure className="avatar mr-3 item-rtl">
                                                    <img src={ManAvatar4} className="rounded-circle" alt="avatar"/>
                                                </figure>
                                            </div>
                                            <CustomInput onChange={handleFileChange} type="file" id="exampleCustomFileBrowser" name="avatar"/>
                                        </div>
                                    </FormGroup>
                        </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleUploadClick} color="primary">Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default UploadAvatarModal
