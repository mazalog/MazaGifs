import {useEffect,useRef} from 'react'

export default function useTitle({title}){

    const prevTitle=useRef(document.title)

    useEffect(function(){
    const previusTitle=prevTitle.current
         document.title=`${title} | mazagifs`
    return ()=>document.title=previusTitle
    },[title])
}
