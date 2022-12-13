import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import { UserProvider } from "../Context/UserContext";

export default function CartScreen({ navigation }) {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <UserProvider>
        <HeaderComponent
          userId={route.params}
          navigation={navigation}
        ></HeaderComponent>
      </UserProvider>
      <View style={styles.listProduct}></View>
      <View style={styles.totalContainer}>
        <View>
            <Text style={{fontSize:20, color:'gray'}}>Total</Text>
            <Text style={styles.txtTotalPrice}>$.....</Text>
        </View>
        <TouchableOpacity style={styles.buttonBuy}>
            <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'white'
    },
    listProduct:{
        height:'76%',
        backgroundColor:'#E4E2E2',
        marginTop:10
    },
    totalContainer:{
        shadowColor:'black',
        elevation:20,
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    txtTotalPrice:{
        fontSize:25,
        fontWeight:'bold'
    },
    buttonBuy:{
        backgroundColor:'#DC9100',
        height:50,
        width:160,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }
})
