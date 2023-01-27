import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ChatsIndex from "./Chats"
import FriendsIndex from "./Friends"
import FavoritesIndex from "./Favorites"
import ArchivedIndex from "./Archived"
import ProfileIndex from './ProfileUser'
import Item from '../Partials/Item'

function Index() {

    const {selectedSidebar, mobileSidebar} = useSelector(state => state);
    const dispatch = useDispatch();

        return (
            <div className={`sidebar-group ${mobileSidebar ? "mobile-open" : ""}`}>
                {
                    (() => {
                        if (selectedSidebar === 'Chats') {
                            return <ChatsIndex/>
                        } else if (selectedSidebar === 'Friends') {
                            return <FriendsIndex/>
                        } else if (selectedSidebar === 'Favorites') {
                            return <FavoritesIndex/>
                        } else if (selectedSidebar === 'Archived') {
                            return <ArchivedIndex/>
                        } else if (selectedSidebar === 'Profile') {
                            return  <ProfileIndex/>
                        }
                    })()
                }
            </div>
        )
    }

export default Index
