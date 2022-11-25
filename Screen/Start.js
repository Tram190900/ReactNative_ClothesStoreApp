import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useRef, useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View, Image, Animated } from 'react-native';
import styles from '../styles';

export default function Start({navigation}){
    const {height, width} = Dimensions.get('window');
    const move1 = useRef(new Animated.Value(100)).current;
    const move2 = useRef(new Animated.Value(0)).current;
    const moveText = useRef(new Animated.Value(-20)).current;
    const moveButton = useRef(new Animated.Value(20)).current;
    const moveImage1 = useRef(new Animated.Value(height/4)).current;
    const moveImage2 = useRef(new Animated.Value(width)).current;
    const changeHeight = useRef(new Animated.Value(height/2.2)).current;
    const changewight = useRef(new Animated.Value(width/2.2)).current;

    useEffect(()=>{
        Animated.timing(moveText,{
            toValue:20,
            duration:1500,
            useNativeDriver:false
        }).start()
        Animated.timing(move1,{
            toValue:2,
            duration:1500,
            useNativeDriver:false
        }).start()
        Animated.timing(moveImage1,{
            toValue:height/2.4,
            duration:1300,
            useNativeDriver:false,
        }).start()
        Animated.timing(moveImage2,{
            toValue:width/2.2,
            duration:1000,
            useNativeDriver:false
        }).start()
        Animated.timing(move2,{
            toValue:1,
            duration:7500,
            useNativeDriver:false
        }).start()
        Animated.timing(moveButton,{
            toValue:-8,
            duration:1000,
            useNativeDriver:false
        }).start()
    },[])

    

    return(
        <View style={styles.startContainer}>
            <Animated.View style={{height:height/6, width:width/2, transform:[{translateX:moveText}]}}>
                <Text style={styles.logoText}>Make Your Style</Text>
            </Animated.View>
            <View style={{justifyContent:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Animated.View style={{height:changeHeight, width:changewight}}>
                        <Image style={styles.imageStart}
                                source={{uri:'https://thumbs.dreamstime.com/b/barefoot-woman-pants-white-barefoot-woman-pants-white-shirt-standing-tiptoe-vintage-suitcase-beige-224612977.jpg'}}></Image>
                    </Animated.View>
                    <View height={height/2.2} width={width/2.3} style={{justifyContent:'space-between', }}>
                        <Animated.View height={height/4.7} style={{transform:[{translateX:move1}]}}>
                            <Image style={styles.imageStart}
                                    source={{uri:'https://media.gq.com/photos/56d75ae39acdcf20275f0f4e/master/pass/1-courtesy%20of%20Gucci.jpg'}}></Image>
                        </Animated.View>
                        <Animated.View height={moveImage1} style={{marginTop:15}}>
                            <Image style={styles.imageStart}
                                source={{uri:'https://img.freepik.com/free-photo/sensual-black-woman-with-beautiful-wavy-hairs-golden-shiny-dress-posing-full-length_273443-4005.jpg?w=2000'}}></Image>
                        </Animated.View>
                        
                    </View>
                </View>
                <Animated.View height={height/5.7} width={moveImage2} style={{marginTop:15}}>
                        <Image style={styles.imageStart}
                                source={{uri:'https://www.express.com/content/dam/express/2022/projects/web/category-inline/03-march/03-floorset/0314-digital-14956-w-cat-header/w-modern-tailoring-header-dt.jpg'}}></Image>    
                </Animated.View>
            </View>
            <Animated.View style={{transform:[{translateY:moveButton}]}}>
                <TouchableOpacity style={styles.buttonGo} 
                                    onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.txtGo}>Go Shopping</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}