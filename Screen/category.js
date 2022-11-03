import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { Dimensions, ScrollView, Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from '../styles';
import back from '../assets/img/back.png';
import { Icon, IconComponentProvider } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Category({navigation}){
    const {height, width} = Dimensions.get('window');
    const [btnColor, setBtnColor] = useState('#E4E2E2')
    const changeColorButton=()=>{
        var color="#576CD9";
        setBtnColor(color);
    }

    return(
        <View style={styles.categoryContainer}>
            <View style={styles.headercategory}>
                <TouchableOpacity onPress={()=>navigation.navigate('Start')}>
                    <Image source={back} ></Image>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Welcome</Text>
                <TouchableOpacity>
                    <Image style={styles.imageHeader}
                        source={{uri:'https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000'}}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput placeholder='Search' style={styles.searchText}></TextInput>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <TouchableOpacity>
                        <Icon name='shopping-search' size={25} color={'gray'}></Icon>
                    </TouchableOpacity>
                </IconComponentProvider>
            </View>


            <View>
                <Text style={{color:'#F7A735', fontSize:25, fontWeight:'bold'}}>Category</Text>
            </View>


            <View>
                <ScrollView contentContainerStyle={styles.listCategory} horizontal={true}>
                    <TouchableOpacity style={[styles.buttonCategory, {backgroundColor:btnColor}]} onPress={changeColorButton}>
                        <Text style={styles.btnCategoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCategory}>
                        <Text style={styles.btnCategoryText}>Men</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCategory}>
                        <Text style={styles.btnCategoryText}>Women</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCategory}>
                        <Text style={styles.btnCategoryText}>Kid</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

