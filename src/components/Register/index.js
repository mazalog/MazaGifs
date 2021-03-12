import React, { useEffect } from 'react'
import {useLocation} from 'wouter'
import useUser from '../../hooks/useUser'
import {useForm} from 'react-hook-form'
import './index.css'


export default function Register () {

    const {register,errors,handleSubmit}=useForm()
    
    const [,navigate]=useLocation()
    const {isLogged,registerUser}=useUser()

    useEffect(()=>{
        if(isLogged===true) navigate('/')
        },[isLogged,navigate])

    const onSubmit=values=>{
       let  username=values 
       registerUser({username})
    }

    return( 
        <>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
                Usuario
            <input
            name="username" 
            placeholder="usuario"
            ref={register({required:true})}
             />
        </label>

             {errors.username &&<small>Campo Requerido</small>}
        <label>
              Contraseña
            <input 
             name="password"
             type="password" 
             placeholder="contraseña" 
             ref={register({required:true})}
              />
        </label>
             {errors.username &&<small>Campo Requerido</small>}
            <button type="submit" className="btn">Registrar</button>
        </form>
        </>
    )
}
/*
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
*/
