const ENDPOINT ='http://localhost:8000'

export default function login({username}){
    return fetch(`${ENDPOINT}/login`,{
        method:'POST',
        headers:{
            "Content-Type":"aplication/json"
        },
        body:JSON.stringify({username})
    }).then(res=>{ 
        if(!res.ok) throw new Error('Responde is NOT ok')
      return res.json()
    }).then(res=>{
        const {jwt}=res
        return jwt
    })
}