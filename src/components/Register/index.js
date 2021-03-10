import React, { useEffect, useState } from 'react'
import {useLocation} from 'wouter'
import useUser from '../../hooks/useUser'
import './index.css'


const Register = () => {

    const [,navigate]=useLocation()
    const [username,setUsername]=useState({username:'',password:''})
    const {isLogged,register}=useUser()

    useEffect(()=>{
        if(isLogged===true) navigate('/')
        },[isLogged,navigate])

    const handleChange=(event)=>{
        setUsername({
            ...username,[event.target.name]:event.target.value
        })
    }

    const onSubmit=(event)=>{
    event.preventDefault()
    register({username})
    }

    return (
        <form className="form" onSubmit={onSubmit}>
        <label>
            usuario
            <input value={username.username} onChange={handleChange}  name="username" placeholder="usuario" required/>
        </label>
        <label>
            contraseña
            <input value={username.password} onChange={handleChange} name="password" type="password" placeholder="contraseña" required />
        </label>
        <button type="submit" className="btn">Registrar</button>
    </form>
    )
}

export default Register
