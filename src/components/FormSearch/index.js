import React, { useState} from "react"
import { useLocation } from "wouter"

const FormSearch=()=>{

    const [key, setKey] = useState('')
    const [path, pushLocation] = useLocation()
    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
         pushLocation(`/search/${key}`)
      }
    
      const handleChange = evt => {
        setKey(evt.target.value)
      }
    return(
        <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Busca un gif..." onChange={handleChange} type='text' value={key} />
      </form>
        </>
    )
}

export default FormSearch