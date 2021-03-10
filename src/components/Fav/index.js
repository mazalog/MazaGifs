import React,{useState} from 'react'
import useUser from '../../hooks/useUser'
import {useLocation} from 'wouter'
import './Fav.css'
import Modal from '../../components/Modal'
import Login from '../../components/Login'

const Fav = ({id}) => {

    const {isLogged,fav,deleteFav,favs}=useUser()

    const [,navigate]=useLocation()
        
    const [showModal,setShowModal]=useState(false)

    const isFaved=favs.some(favId=> id===favId.fav)


    const handleClick=()=>{
     if(!isLogged) return setShowModal(true)
     isFaved? deleteFav({id}) : fav({id})
    }

    const handleClose=()=>{
        setShowModal(false)
    }

    const[label,emoji]=isFaved?['Remove Gif from favorites',
                                '❌'
                                ]:['Add Gif to favorites',
                                '💗'  
                                 ]

    return (
      
        <>
        <button className='gf-Fav' onClick={handleClick}>
            <span  arial-label={label} role="img">{emoji}</span>
        </button>
           {showModal && <Modal onClose={handleClose}><Login/></Modal>}
        </>
    )
}

export default Fav
