import { COUNTRE_DEC,COUNTRE_INC } from "./counter.actionTypes";


export const counterInc=(payload=1)=>({

type:COUNTRE_INC,
payload
})

export const counterDec=(payload=1)=>({

    type:COUNTRE_DEC,
    payload
    })

   

                