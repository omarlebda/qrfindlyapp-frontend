import React, { useState, useEffect, useContext} from "react"
import {ReactComponent as Logo} from '../assets/logo.svg'
import AuthContext from "../context/auth/AuthContext";
import { useHistory } from "react-router-dom";

function SignUp() {
    
    useEffect(() => document.body.classList.add('form-membership'), []);
    const history = useHistory()
    const {register} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const {firstName, lastName, email, password} = formData
    
    const handleChange = (e) =>{
        let key = e.target.id
        let value = e.target.value
        setFormData((prevState) => ({
            ...prevState,
            [key] : value
          }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userRegister = await register(formData)
            if(!userRegister.error){
                history.push('/')
                console.log(userRegister.status)
            }else{
                // @To-Do Add Error Alerts
                console.log(userRegister.error.message)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-wrapper">
            <div className="logo">
                <Logo/>
            </div>
            <h5>Create account</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="firstName" value={firstName} onChange={handleChange} type="text" className="form-control" placeholder="Firstname" required autoFocus/>
                </div>
                <div className="form-group">
                    <input id="lastName" value={lastName} onChange={handleChange} type="text" className="form-control" placeholder="Lastname" required/>
                </div>
                <div className="form-group">
                    <input id="email" value={email} onChange={handleChange} type="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <input id="password" value={password} onChange={handleChange} type="password" className="form-control" placeholder="Password" required/>
                </div>
                <button type='submit' className="btn btn-primary btn-block">Register</button>
                <hr/>
                <p className="text-muted">Already have an account?</p>
                <a href="/sign-in" className="btn btn-outline-light btn-sm">Sign in!</a>
            </form>
        </div>
    )
}

export default SignUp
