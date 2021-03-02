import {useEffect,useRef} from 'react'

export default function useSEO({description,title}){

    const prevTitle=useRef(document.title)
     const prevDescription=useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(function(){
    const previusTitle=prevTitle.current
    if(title){
    document.title=`${title} | mazagifs`
    }
    return ()=>document.title=previusTitle
    },[title])
    
    useEffect(()=>{
     const metaDescription=document.querySelector('meta[name="description"]')
      const previousDescription=prevDescription.current
   
    if(description){
     metaDescription.setAttribute('content',description)
    }

    return()=>metaDescription.setAttribute('content',previousDescription)
    },[description])
}
