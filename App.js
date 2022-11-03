import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Category from './Screen/category';
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
    <NavigationContainer screenOptions={{headerShown: false}}>
      
      <stack.Navigator>
        <stack.Screen name='Start' component={Start}
                      options={{headerShown:false}}></stack.Screen>
        <stack.Screen name='Category' component={Category}
                      options={{headerShown:false}}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}