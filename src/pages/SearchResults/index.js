import React,{useCallback,useRef,useEffect} from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'
import {useNearScreen} from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'


export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs,setPage,loadingNextPage } = useGifs({ keyword })
  const externalRef=useRef()
  const {isNearScreen}=useNearScreen({
    externalRef:loading?null:externalRef,once:false})

   
     const debounceHandleNextPage=useCallback(debounce(
     ()=>setPage(prev=>prev+1),300
   ),[setPage])

   useEffect(function(){
      if(isNearScreen) debounceHandleNextPage()
   },[debounceHandleNextPage,isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div ref={externalRef} id='visor'></div>
        <br/>
        {loadingNextPage?<Spinner/>:null}
      </>
    }
  </>
}