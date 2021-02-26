import React from "react"
import FormSearch from "../../components/FormSearch"
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from "../../components/Spinner"
import TrendingSearches from "../../components/TrendingSearches"
import {useGifs} from '../../hooks/useGifs'


export default function Home() {

  const {loading, gifs} = useGifs()


  return (
    <>
     <FormSearch/>
     {loading?<Spinner/>:
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
           <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
           <TrendingSearches/>
        </div>
      </div>
     }
    </>
  )
}