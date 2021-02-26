import React, { useState,useEffect } from 'react'
import getTrendingGifs from '../../services/getTrendingGifs'
import Category from '../Category'


const TrendingSearches=()=>{
   const [trends,setTrends]=useState([])

   useEffect(function(){
    getTrendingGifs().then(setTrends)
   },[])

   return <Category options={trends} name="Tendencias"/>
}
export default TrendingSearches