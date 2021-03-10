import React from 'react'
import {Link} from 'wouter'
import useUser from  '../../hooks/useUser'
import './index.css'
const Header =()=>{

   const {isLogged,logout} =useUser()
 
   const handleClick=(e)=>{
       e.preventDefault()
       logout()
   }


    return(
        <header className="gf-header">
            {
            isLogged?
            <Link className="header-btn" to='#' onClick={handleClick}>
                Cerrar sesion 
            </Link>
            :
            <>
            <Link  className="header-btn" to="/Register">
                Registro
            </Link>
            <Link className="header-btn" to="/login">
                Iniciar sesion
            </Link>
            </>

            }
        </header>
    )
}

export default Header