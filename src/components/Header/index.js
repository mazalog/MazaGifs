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
            <Link to='#' onClick={handleClick}>
                Logout
            </Link>
            :
            <Link to="/login">
                Login
            </Link>
            }
        </header>
    )
}

export default Header