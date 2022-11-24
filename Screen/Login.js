import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function LoginScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>LoginScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})