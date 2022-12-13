import { useRoute } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue, get, child } from "firebase/database";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

 const getUserData=(userId) => {
    console.log("Context "+userId);
    const dbRef = ref(database);
    get(child(dbRef, `users/`+userId)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setUserData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  const value ={
    userData,
    getUserData
  }

  return (
    <UserContext.Provider value= {value}>{children}</UserContext.Provider>
  );
};
