import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import styles from "../styles";
import back from "../assets/img/back.png";
import logo from "../assets/img/logo.png";
import { UserContext } from '../Context/UserContext';
import { useRoute } from '@react-navigation/native';

export default function HeaderComponent({navigation}){
    const route = useRoute();
    const {userData ,setUserId} = useContext(UserContext);
    useEffect(()=>{
        setUserId(route.params)
    },[])

    return(
        <View style={styles.headercategory}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
    )
}