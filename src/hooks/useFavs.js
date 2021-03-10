import {useCallback,useEffect,useContext} from 'react'
import Context from '../context/UserContext'
import 'firebase/firestore'
import {useFirestore} from 'reactfire'
    

export  function useFavs(){

    const db=useFirestore()

    const {jwt,favs,setFavs,}=useContext(Context)

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
    getFav()
    },[getFav])
    
    return {favs}
}