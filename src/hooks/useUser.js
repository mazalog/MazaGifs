import {useContext,useCallback} from 'react'
import Context from '../context/UserContext'
import loginServices from '../services/login'

export default function useUser() {

    const {jwt,setJWT}=useContext(Context)
    
    const login=useCallback(({username})=>{
     loginServices({username})
     .then(jet=>{
         console.log(jet)
         setJWT(jet)
     })
     .catch(
         err=>{
             console.log(err)
         }
     )
    },[setJWT])

    const logout=useCallback(()=>{
        setJWT(null)
       },[setJWT])
 

    return {
        isLogged:Boolean(jwt),
        login,
        logout
    }
}