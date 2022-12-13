import { useRoute } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue, get, child } from "firebase/database";

export const CartContext = createContext();
export const CartProvider =({children})=>{
    const [countProduct, setCountProduct] = useState(0);

    const value={
        countProduct
    }
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
