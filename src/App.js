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

function App() {
    return (
        <AuthProvider>
        <Router>
            <Switch>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/lock-screen" component={LockScreen}/>
                <Route path="/reset-password" component={ResetPassword}/>
                <Route path="/phone-code" component={PhoneCode}/>
                <Route path="/" component={Layout}/>
            </Switch>
        </Router>
        </AuthProvider>
    )
}

export default App