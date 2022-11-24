import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import back from '../assets/img/back.png';
import { useRoute } from '@react-navigation/native';

export default function ProductDetail({navigation}){
    const route = useRoute();
    const [data, setData] = useState([]);
    const {height, width} = Dimensions.get('window')
    
    useEffect(()=>{
        setData(route.params)
    },[])
    return(
        <View style={styles.detailContainer}>
            <TouchableOpacity style={{ height:height/15}} onPress={()=>navigation.navigate('Category')}>
                <Image source={back} style={{margin:10}}></Image>
            </TouchableOpacity>

            <View style={[styles.imageProduct]}>
                <Image source={{uri:data.imageProduct}} style={{width:'100%', height:'100%', borderRadius:30}}></Image>
            </View>

            <View style={{height:height/3.7}}>
                <View  style={styles.nameContainer}>
                    <Text style={styles.textName}>{data.name}</Text>
                    <TouchableOpacity>
                        <AntDesign name='hearto' size={25}></AntDesign>
                    </TouchableOpacity>
                </View>
                <Text style={styles.describe}>{data.describe}</Text>
            </View>

            
            <View style={{height:height/10}}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textPrice}>Add to cart</Text>
                    <Text style={styles.textPrice}>${data.price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    detailContainer:{
        flex:1,
        margin:15
    },
    textName:{
        fontWeight:'bold',
        margin:5,
        fontSize:25,
        width:'80%'
    },
    textPrice:{
        fontWeight:'bold',
        marginLeft:5,
        fontSize:20
        //DC9100
    },
    imageProduct:{
        width:'100%', 
        height:'55%',
        borderRadius:30,
        elevation:20,
        shadowColor:'black'
    },
    describe:{
        color:'gray',
        fontWeight:'bold',
        height:'70%',
        fontSize:16,
    },
    buttonAdd:{
        flexDirection:'row',
        backgroundColor:'#DC9100',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        height:'75%',
        borderRadius:35,
        paddingLeft:20,
        paddingRight:20,
    },
    nameContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        height:'35%'
    }
})