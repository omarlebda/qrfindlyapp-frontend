import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import LockScreen from "./Pages/LockScreen"
import ResetPassword from "./Pages/ResetPassword"
import PhoneCode from "./Pages/PhoneCode"
import Layout from "./App/Layout"
import { AuthProvider } from './context/auth/AuthContext'
import { UserProvider } from './context/user/UserContext'

import GuestGuard from './context/auth/GuestGuard'
import ProfilePage from './App/Sidebars/ProfileUser'
function App() {
    return (
        <AuthProvider>
        <UserProvider>
        <Router>
            <Switch>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/lock-screen" component={LockScreen}/>
                <Route path="/reset-password" component={ResetPassword}/>
                <Route path="/phone-code" component={PhoneCode}/>
                {/* <Route path="/" component={Layout}/> */}
                <GuestGuard>
                    <Route path="/" component={Layout}/>
                </GuestGuard>
            </Switch>
        </Router>
        </UserProvider>
        </AuthProvider>
    )
}

export default App
