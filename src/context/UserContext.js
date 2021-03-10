import React, {useState,useCallback,useEffect} from 'react'
import 'firebase/firestore'
import {useFirestore} from 'reactfire'

const Context = React.createContext({})

export function UserContextProvider ({children}) {

    const db=useFirestore()
  
    const [favs,setFavs]=useState([])

    const [jwt, setJWT] = useState(
      ()=>window.sessionStorage.getItem('jwt')
      )
    
    const getFav=useCallback(()=>{
      db.collection(jwt).onSnapshot( (querySnapshot)=>{
          const listFavs=[]   
          querySnapshot.forEach((fav)=>{
              listFavs.push({...fav.data(),id:fav.id})
          })
          setFavs(listFavs)
          })
    },[setFavs])

    useEffect(()=>{
      if(!jwt) return setFavs([])
      getFav()
    },[jwt])

  return(
  <Context.Provider value={{favs,setFavs,jwt, setJWT}}>
    {children}
  </Context.Provider>)
}

export default Context