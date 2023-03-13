import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import LockScreen from "./Pages/LockScreen"
import ResetPassword from "./Pages/ResetPassword"
import PhoneCode from "./Pages/PhoneCode"
import Layout from "./App/Layout"
import { AuthProvider } from './context/auth/AuthContext'
import { UserProvider } from './context/user/UserContext'
import { ItemProvider } from './context/item/ItemContext'
import GuestGuard from './context/auth/GuestGuard'
import ProfilePage from './App/Sidebars/ProfileUser'
import io from 'socket.io-client';
const socket = io('http://localhost:3000');


function App() {
    //const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const jwt = localStorage.getItem('token');
        if (jwt) {
            setIsLoggedIn(true);
        } 

        socket.on('connect', () => {
            console.log('Connected to server');
        });
    }, []);



    

    return (
        <AuthProvider>
        <UserProvider>
        <ItemProvider>
        <Router>
            <Switch>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/lock-screen" component={LockScreen}/>
                <Route path="/reset-password" component={ResetPassword}/>
                <Route path="/phone-code" component={PhoneCode}/>
                {/* <Route path="/" component={Layout}/> */}
                <Route exact path="/">
                    {isLoggedIn ? <Redirect to="/layout" /> : <SignIn />}
                </Route>
                <Route path="/layout">
                    {isLoggedIn ? <Layout /> : <Redirect to="/" />}
                </Route>
                {/* <GuestGuard>
                    <Route path="/" component={Layout}/>
                </GuestGuard> */}
            </Switch>
        </Router>
        </ItemProvider>
        </UserProvider>
        </AuthProvider>
    )
}

export default App
