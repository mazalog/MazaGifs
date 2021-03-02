import  {useReducer} from 'react'

const ACTIONS={
    UPDATE_KEYWORD:'update_keyword',
    UPDATE_RATING:'update_rating'
  }

const reducer=(state,action)=>{

    if(action.type===ACTIONS.UPDATE_KEYWORD){
      return {
        ...state,
        keyword:action.payload, 
        times:state.times+1
      }
    }else if(action.type===ACTIONS.UPDATE_RATING){
      return {
        ...state,
        rating:action.payload, 
        times:state.times+1
      }
    }
  }
  
 export default function useForm({
   initialKeyword=''
  ,initialRating='g'}={}){
  
    const [state,dispatch]=useReducer(reducer,{
      keyword:decodeURIComponent(initialKeyword),
      rating:initialRating,
      times:0,
    })
  
    const {keyword,rating,times}=state
  
    return{
      keyword,
      rating,
      times,
      updateKeyword:keyword=> dispatch({type:'update_keyword',payload:keyword}),
      updateRating:rating=>dispatch({type:'update_rating',payload:rating})
    }
  
  }