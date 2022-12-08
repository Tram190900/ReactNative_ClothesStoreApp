import { useRoute } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue, get, child } from "firebase/database";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const route = useRoute();
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("");

  useEffect(() => {
    console.log(userId);
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
  },[]);

  return (
    <UserContext.Provider value={{ userData,setUserId }}>{children}</UserContext.Provider>
  );
};
