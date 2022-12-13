import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import CartScreen from './Screen/Cart';
import Category from './Screen/category';
import LoginScreen from './Screen/Login';
import ProductDetail from './Screen/ProductDetail';
import ProfileScreen from './Screen/Profile';
import Start from './Screen/Start';

const stack = createNativeStackNavigator();

function CustomHeader(){
  return(
    <View>
      <Text>Welcome</Text>
      <Image style={{with:20, height:20}} source={{uri:'https://www.telegraph.co.uk/content/dam/fashion/2020/12/14/Zara-dress_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwe5BWCHbGfIjcvXJB9PcG8A.jpg?imwidth=680'}}></Image>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name='Start' component={Start}></stack.Screen>
        <stack.Screen name='Category' component={Category}></stack.Screen>
        <stack.Screen name='ProductDetail' component={ProductDetail}></stack.Screen>
        <stack.Screen name='Login' component={LoginScreen}></stack.Screen>
        <stack.Screen name='Profile' component={ProfileScreen}></stack.Screen>
        <stack.Screen name='Cart' component={CartScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}