

import { getFeedapi } from "./feed.api"

import { FEED__ERROR, FEED__LOADING, FEED__RESET, FEED__SUCCESS } from "./feed.types"


export const getFeeds=()=>async(dispatch)=>{



    try {
dispatch({type:FEED__LOADING})
      let data=await getFeedapi()
      dispatch({type:FEED__SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:FEED__ERROR})
    }
    
    }