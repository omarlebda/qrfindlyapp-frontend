import React, {useState, useContext, useEffect} from 'react'
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

function EditProfileModal(props) {

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const {user, editUser} = useContext(UserContext)

    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        about: user?.about,
        location: user?.location,
        phoneNumber: user?.phoneNumber,
        facebookLink: user?.facebookLink,
        twitterLink: user?.twitterLink,
        instagramLink: user?.instagramLink,
        whatsappLink: user?.whatsappLink
    })
    const {firstName, lastName, about, location, phoneNumber, facebookLink, twitterLink, instagramLink, whatsappLink} = formData

    const handleChange = (e) =>{
        const userData = {...formData}
        userData[e.target.id] = e.target.value
        setFormData(userData)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        editUser(formData)
        props.toggle()
    }
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} centered className="modal-dialog-zoom">
                <ModalHeader toggle={props.toggle}>
                    <FeatherIcon.Edit2 className="mr-2"/> Edit Profile
                </ModalHeader>
                <ModalBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '1'})}
                                onClick={() => {
                                    toggle('1');
                                }}
                            >
                                Personal
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '2'})}
                                onClick={() => {
                                    toggle('2');
                                }}
                            >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '3'})}
                                onClick={() => {
                                    toggle('3');
                                }}
                            >
                                Social Links
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Form>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <FormGroup>
                                    <Label for="firstname">First Name</Label>
                                    <InputGroup>
                                        <Input type="text" name="firstname" id="firstName" defaultValue={firstName} onChange={handleChange}/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.User/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <InputGroup>
                                        <Input type="text" name="lastname" id="lastName" defaultValue={lastName} onChange={handleChange}/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.User/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <InputGroup>
                                        <Input type="text" name="city" id="location" placeholder="Ex: Columbia" defaultValue={location} onChange={handleChange}/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.Target/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <InputGroup>
                                        <Input type="text" name="phone" id="phoneNumber" placeholder="(555) 555 55 55" defaultValue={phoneNumber} onChange={handleChange}/>
                                        <InputGroupAddon addonType="append">
                                            <Button color="light">
                                                <FeatherIcon.Phone/>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </TabPane>
                            <TabPane tabId="2">
                                <FormGroup>
                                    <Label for="about">Write a few words that describe you</Label>
                                    <Input type="textarea" name="about" id="about" defaultValue={about} onChange={handleChange}/>
                                </FormGroup>
                            </TabPane>
                            <TabPane tabId="3">
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="facebook" id="facebookLink"  defaultValue={facebookLink} onChange={handleChange} placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-facebook">
                                                <i className="fa fa-facebook"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="twitter" id="twitterLink"  defaultValue={twitterLink} onChange={handleChange} placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-twitter">
                                                <i className="fa fa-twitter"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="instagram" id="instagramLink"  defaultValue={instagramLink} onChange={handleChange} placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-instagram">
                                                <i className="fa fa-instagram"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" name="whatsapp" id="whatsappLink"  defaultValue={whatsappLink} onChange={handleChange} placeholder="Username"/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className="bg-whatsapp">
                                                <i className="fa fa-whatsapp"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </TabPane>
                        </TabContent>
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
