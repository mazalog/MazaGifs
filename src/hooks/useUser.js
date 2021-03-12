import {useContext,useCallback,useState} from 'react'
import Context from '../context/UserContext'
import 'firebase/auth'
import 'firebase/firestore'
import {useFirebaseApp,useFirestore} from 'reactfire'

export default function useUser() {

    const {favs,jwt,setJWT,setFavs}=useContext(Context)

    const [state,setState]=useState({
        loading:false,
        error:false
    })

    const firebase=useFirebaseApp()
    const db=useFirestore()

    const registerUser=useCallback(({username})=>{
        setState({loading:true,error:false})
        firebase.auth().createUserWithEmailAndPassword(username.username,username.password)
        .then(jwt=>{
            setJWT(jwt)
            window.sessionStorage.setItem('jwt',jwt)
            setState({loading:false,error:false})
        })
        .catch(err=>{
            window.sessionStorage.removeItem('jwt')
            setState({loading:false,error:true})
            console.error(err)
        })
    },[])


    const login=useCallback(({username})=>{
       setState({loading:true,error:false})
       firebase.auth().signInWithEmailAndPassword(username.username,username.password)
       .then(jwt=>{
           window.sessionStorage.setItem('jwt',jwt.user.email)
           setState({loading:false,error:false})
           setJWT(jwt.user.email)
       })
       .catch(err=>{
           setState({loading:false,error:true})
           console.error(err)
       })
    },[])

 
    const logout=useCallback(()=>{
       window.sessionStorage.removeItem('jwt')
       firebase.auth().signOut()
       setJWT(null)
    },[setJWT])

    const fav=useCallback(({id})=>{
        db.collection(jwt).add({
        fav:id
        }).then(
        console.log('add favorites')
        )
       .catch(err=>{
        console.error(err)
        })
    },[])
  
    const deleteFav=useCallback(({id})=>{
    
        db.collection(jwt).onSnapshot( (querySnapshot)=>{
            const listFavs=[]   
            querySnapshot.forEach((fav)=>{
                listFavs.push({...fav.data(),id:fav.id})
            })

            const faved=listFavs.find(singleFav=>singleFav.fav===id)
            
            if(faved){
                const doc=faved.id
                db.collection(jwt).doc(doc).delete()
                .then(function(){
                console.log('Delete')
                })
                .catch(err=>{
                    console.error(err)
                })
            }

        })

    },[])


 
    return {
        isLogged:Boolean(jwt),
        isLoginLoading:state.loading,
        isLoginError:state.error,
        registerUser,
        login,
        logout,
        favs,
        fav,
        deleteFav
    }
}