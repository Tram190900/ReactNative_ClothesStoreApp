import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useRef, useState } from "react";
import { ref, onValue, get, child } from "firebase/database";
import { FontAwesome } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import { database } from "../firebaseConfig";

export default function ProfileScreen({ navigation }) {
  const route = useRoute();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(route.params)
  }, []);
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{left:-150, top:-40}} onPress={()=>navigation.goBack()}>
            <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
      <View
        style={{ backgroundColor: "#BCD9F4", borderRadius: 10, width: "90%" }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 20 }}
        >
          <FontAwesome name="user" size={30} color="black" />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>{userData.name}</Text>
            <Text style={{ color: "gray" }}>Name</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 20,
            marginTop: -10,
          }}
        >
          <Zocial name="email" size={30} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20 }}>{userData.email}</Text>
            <Text style={{ color: "gray" }}>Eamil</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 20,
            marginTop: -10,
          }}
        >
          <FontAwesome name="transgender" size={30} color="black" />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20 }}>{userData.sex}</Text>
            <Text style={{ color: "gray" }}>Gender</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 20,
            marginTop: -10,
          }}
        >
          <FontAwesome name="birthday-cake" size={30} color="black" />
          <View style={{ marginLeft: 13 }}>
            <Text style={{ fontSize: 20 }}>{userData.birthday}</Text>
            <Text style={{ color: "gray" }}>Birthday</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#BCD9F4",
          borderRadius: 10,
          width: "90%",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 20,
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="edit" size={30} color="black" />
          <View style={{ marginLeft: 13 }}>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 18 }}>
              Edit Profile
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 20,
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="setting" size={30} color="black" />
          <View style={{ marginLeft: 13 }}>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 18 }}>
                Settings
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    paddingTop: 90,
  },
});
