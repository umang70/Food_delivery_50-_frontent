
import { createContext } from "react";
import {food_list} from "../assets/assets"


export const StoreContext=createContext(null)
const StoreContextProvider=(probs)=>{


    const ContextValue={
        food_list



    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {probs.children}
        </StoreContext.Provider>

    )
}
export default StoreContextProvider