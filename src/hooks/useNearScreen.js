import {useRef,useState,useEffect} from 'react'

export function useNearScreen( {distance,externalRef,
   once=true } = {distance:'100px'} ){

    const fromRef=useRef()

    const [isNearScreen,setShow]=useState(false)
 
    useEffect(function(){
 
       let observer
       
       const element=externalRef?externalRef.current:fromRef.current
       
       const onChange=(entries)=>{
       const el=entries[0]
       if(el.isIntersecting){
       setShow(true)
      once && observer.disconnect()
       }else{
          !once&&setShow(false)
       }
      }
         observer=new IntersectionObserver(onChange,{
            rootMargin:distance
         })
      if(element)observer.observe(element)
 
      return () =>observer&&observer.disconnect()
   })
 
   return {isNearScreen,fromRef}
 
 }