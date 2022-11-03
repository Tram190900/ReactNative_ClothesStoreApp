import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, Image, Text, TouchableOpacity, View, TextInput, FlatList, DatePickerAndroid } from 'react-native';
import styles from '../styles';
import back from '../assets/img/back.png';
import logo from '../assets/img/logo.png';
import { Icon, IconComponentProvider } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {AntDesign} from '@expo/vector-icons';
import SimpleSelectButton from 'react-native-simple-select-button';

export default function Category({navigation}){
    const {height, width} = Dimensions.get('window');
    const [btnColor, setBtnColor] = useState('#E4E2E2');
    const [choise, setChoise] =  useState('');
    // const [inforProduct, setInforProduct] = useState({
    //     id: null,
    //     category: null
    // })

    const getProducts= async(category)=>{
        fetch('https://63512fa53e9fa1244e57aeb0.mockapi.io/store/Category/'+category+'/Products')
        .then(res=>res.json())
        .then(resJson=>setData(resJson))
    }

    const checkButton=(category)=>{
        setChoise(category)
        getProducts(category)
    }

    const handlerClick=(item)=>{
        navigation.navigate("ProductDetail",{
                                id: item.id,
                                category: item.CategoryId
        })
    }

    const [data, setData] = useState([]);
    useEffect(()=>{
        checkButton('Men')
    },[])

    return(
        <View style={styles.categoryContainer}>
            <View style={styles.headercategory}>
                <TouchableOpacity onPress={()=>navigation.navigate('Start')}>
                    <Image source={back} ></Image>
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <Image source={logo} style={{width:95, height:56}}></Image>
                </View>
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


            <View style={styles.bannerContainer}>
                <Image source={{uri:'https://content.wepik.com/statics/1977648/fashion-banner-blog-10330771page1.jpg'}}
                        style={{height:'100%', width:'100%'}}></Image>
            </View>


            <View style={{height:'11.5%'}}>
                <ScrollView contentContainerStyle={styles.listCategory} horizontal={true}>

                    <View style={{width:70, marginRight:60}}>
                        <SimpleSelectButton text="Men" 
                                            buttonDefaultColor={'#E4E2E2'} 
                                            buttonSelectedColor={'#DC9100'} 
                                            textDefaultColor={'black'}
                                            textSelectedColor={'white'}
                                            isChecked={choise==='Men'?true:false} 
                                            onPress={()=>checkButton('Men')}></SimpleSelectButton>
                    </View>

                    <View style={{width:80, marginRight:60}}>
                        <SimpleSelectButton text="Women" 
                                            buttonDefaultColor={'#E4E2E2'} 
                                            buttonSelectedColor={'#DC9100'} 
                                            textDefaultColor={'black'}
                                            textSelectedColor={'white'}
                                            isChecked={choise==='Women'?true:false} 
                                            onPress={()=>checkButton('Women')}></SimpleSelectButton>
                    </View>

                    <View style={{width:70}}>
                        <SimpleSelectButton text="Kid" 
                                            buttonDefaultColor={'#E4E2E2'} 
                                            buttonSelectedColor={'#DC9100'} 
                                            textDefaultColor={'black'}
                                            textSelectedColor={'white'}
                                            isChecked={choise==='Kid'?true:false} 
                                            onPress={()=>checkButton('Kid')}></SimpleSelectButton>
                        </View>
                </ScrollView>
            </View>

            <View style={{height:'52%'}}>
                <FlatList data={data} keyExtractor={(item)=>item.id}
                renderItem={({item, index})=>{
                    return(
                        <View style={styles.listContainer}>
                            <TouchableOpacity style={styles.itemContainer} onPress={()=>handlerClick(item)}>
                                <Image style={styles.imageItem} source={{uri:item.imageModel}}></Image>
                                    
                                <View style={styles.itemText}>
                                    <View style={{width:'80%'}}>
                                        <Text style={styles.textName}>{item.name}</Text>
                                        <Text style={styles.textPrice}>{item.price}$</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <AntDesign name='shoppingcart' size={25} color='#DC9100'></AntDesign>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }} numColumns={2}>

                </FlatList>
            </View>
        </View>
    )
}

