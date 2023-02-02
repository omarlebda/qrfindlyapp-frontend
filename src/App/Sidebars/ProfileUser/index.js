import React, {useState, useEffect, useContext} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Label, Button} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import PerfectScrollbar from "react-perfect-scrollbar"
import {profileAction} from "../../../Store/Actions/profileAction"
import {mobileProfileAction} from "../../../Store/Actions/mobileProfileAction"
import WomenAvatar5 from "../../../assets/img/women_avatar5.jpg"
import UploadAvatarModal from '../../Modals/UploadAvatarModal'
import EditProfileModal from '../../Modals/EditProfileModal'
import UserContext from '../../../context/user/UserContext'

function Index() {
    const mobileMenuBtn = () => document.body.classList.toggle('navigation-open');
    const dispatch = useDispatch();
    const [uploadAvatarOpen, setUploadAvatarOpen] =  useState(false)
    const uploadAvatarToggle = () => setUploadAvatarOpen(!uploadAvatarOpen);

    const [editModalOpen, setEditModalOpen] = useState(false);
    const editModalToggle = () => setEditModalOpen(!editModalOpen);
    
    const {profileSidebar, mobileProfileSidebar} = useSelector(state => state);

    const [activeTab, setActiveTab] = useState('1');

    const {user, getUser} = useContext(UserContext)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const profileActions = (e) => {
      e.preventDefault();
      dispatch(profileAction(false));
      dispatch(mobileProfileAction(false))
    };

    useEffect(()=>{
        getUser()
    }, [])

    const isSocialMedia = user?.facebookLink || user?.twitterLink || user?.whatsappLink || user?.instagramLink

  return (
    <>
    < UploadAvatarModal modal={uploadAvatarOpen} toggle={uploadAvatarToggle}/>
    <EditProfileModal modal={editModalOpen} toggle={editModalToggle}/>
    
    <div className="sidebar active">
      <header>
        <div className="d-flex align-items-center">
          <span className="sidebar-title">Profile</span>
        </div>

      </header>
      <div className="sidebar-body">
                    <PerfectScrollbar>
                        <div className="pl-4 pr-4">
                            <div className="text-center mb-3">
                                <figure className="avatar avatar-xl mb-3">
                                    <img src={user?.avatar? `data:image/png;base64, ${user.avatar}` : WomenAvatar5} className="rounded-circle" alt="avatar"/>
                                </figure>
                                <h5 className="mb-1">{user?.firstName +' '+ user?.lastName} </h5>
                                <small className="text-muted font-italic mb-2">Last seen: Today</small>
                            </div>
                            <div className='text-center mb-2'>
                                <a className='customBtn mr-1' onClick={uploadAvatarToggle}><FeatherIcon.Paperclip /></a>
                                {user?.avatar? <Label>Edit Avatar</Label>: <Label>Upload Avatar</Label>}
                            </div>
                            <div className="mb-3">
                                        <Button onClick={editModalToggle} className="btn btn-light">Edit Profile</Button>
                            </div>
                            {user?.about ? 
                            <p className="text-muted">{user?.about}</p>
                            : <p className="text-muted">Edit your profile to fill the about section</p>}
                             <div className="mt-4 mb-4">
                             <h6>Phone</h6>
                            {
                                user?.phoneNumber?
                                <p className="text-muted">{user?.phoneNumber}</p>
                                :
                                <p className="text-muted">Edit your profile to add your phone number</p>

                            }
                            </div>
                            

                            <div className="mt-4 mb-4">
                            <h6>Location</h6>
                            {
                                user?.location?
                                <p className="text-muted">{user?.location}</p>
                                :
                                <p className="text-muted">Edit your profile to add your location</p>

                            }
                            </div>
                                        
                                    <div className="mt-4 mb-4">
                                        <h6 className="mb-3">Social media accounts</h6>
                                        <ul className="list-inline social-links">
                                            { !isSocialMedia &&
                                            <p className="text-muted">Edit your profile to add your Social Media links</p>}
                                            {user?.facebookLink && 
                                            <li className="list-inline-item">
                                                <a href={user?.facebookLink} className="btn btn-sm btn-floating btn-facebook"
                                                   data-toggle="tooltip" title="Facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            }

                                            {user?.twitterLink && 
                                            <li className="list-inline-item">
                                                <a href={user?.twitterLink} className="btn btn-sm btn-floating btn-twitter"
                                                   data-toggle="tooltip" title="Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            }

                                            {user?.whatsappLink && 
                                            <li className="list-inline-item">
                                                <a href={user?.whatsappLink} className="btn btn-sm btn-floating btn-whatsapp"
                                                   data-toggle="tooltip" title="Whatsapp">
                                                    <i className="fa fa-whatsapp"></i>
                                                </a>
                                            </li>
                                            }

                                            {user?.instagramLink && 
                                                <li className="list-inline-item">
                                                <a href={user?.instagramLink} className="btn btn-sm btn-floating btn-instagram"
                                                   data-toggle="tooltip" title="Instagram">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            }
                                            
                                        </ul>
                                    </div>
                        </div>
                    </PerfectScrollbar>
                </div>
    </div>
    </>
  )
}

export default Index