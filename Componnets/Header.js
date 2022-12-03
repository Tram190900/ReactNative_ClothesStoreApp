import { Image, View, TouchableOpacity } from "react-native";
import styles from "../styles";
import back from "../assets/img/back.png";
import logo from "../assets/img/logo.png";
import { useContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

export default function HeaderComponent({ userId }) {
  const [userData, setUserData] = useState({});

const getUserData=async(id)=>{
    const starCountRef = ref(database, "/users/" + id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
      console.log(userData);
    });
}

  useEffect(() => {
    getUserData(userId)
  }, []);

  return (
    <View style={styles.headercategory}>
      <TouchableOpacity onPress={() => navigation.navigate("Start")}>
        <Image source={back}></Image>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image source={logo} style={{ width: 95, height: 56 }}></Image>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.imageHeader}
          source={{
            uri: userData.uriImage,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
