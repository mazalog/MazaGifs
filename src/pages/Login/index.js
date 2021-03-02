import React, { useEffect, useState } from 'react'
import {useLocation} from 'wouter'
import useUser from '../../hooks/useUser'

const Login = () => {

    const [,navigate]=useLocation()
    const [username,setUsername]=useState({username:'',password:''})
    const {login,isLogged}=useUser()


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
     login({username})
    }



    return (
         <form onSubmit={onSubmit}>
             <input value={username.username} onChange={handleChange}  name="username" placeholder="username"/>
             <input value={username.password} onChange={handleChange} name="password" type="password" placeholder="password" />
             <button type="submit">Login</button>
         </form>
    )
}

export default Login
