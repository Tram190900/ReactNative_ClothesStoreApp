import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "@react-native-material/core";
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebaseConfig";
import { database } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref } from "firebase/database";
import { user } from "../src/user";

export default function LoginScreen({ navigation }) {
  const { height, width } = Dimensions.get("screen");
  const move = useRef(new Animated.Value(0)).current;
  const login = useRef(new Animated.Value(0)).current;
  const sign = useRef(new Animated.Value(0)).current;
  const indexSignUp = useRef(new Animated.Value(-1)).current;
  const [email, setEmail] = useState("tram@gmail.com");
  const [password, setPassword] = useState("123456");

  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [nameSignUp, setNameSignUp] = useState("");

  const User=(email,password,name,sex,birthday,uriImage)=>{
    var User = user;
    var id = user.email.slice(0, -10);
    User.id = id,
    User.email = email,
    User.password = password,
    User.name = name,
    User.sex = sex,
    User.birthday = birthday,
    User.uriImage = uriImage
    return User
  }

  const signupScreen = () => {
    Animated.timing(login, {
      toValue: 700,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(sign, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false,
    }).start();
    Animated.timing(indexSignUp, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const loginScreen = () => {
    Animated.timing(login, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(sign, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start();
    Animated.timing(indexSignUp, {
      toValue: -1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const handlerLogin = (getEmail, getPassword) => {
    console.log(getEmail);
    var id = getEmail.slice(0, -10);
    signInWithEmailAndPassword(auth, getEmail, getPassword)
      .then(() => {
        navigation.navigate("Category", id);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        Alert.alert("Email hoặc Password sai hoặc không tồn tại");
      });
  };

  const handlerSigUp = (user) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        set(ref(database, "users/" + id), {
          email: user.email,
          password: user.password,
          name: user.name,
          sex: user.sex,
          birthday: user.birthday,
          uriImage: user.uriImage,
        });
        loginScreen();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        Alert.alert("Đăng ký không thành công");
      });
  };

  return (
    <View style={[styles.container]}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={{
          uri: "https://thumbs.dreamstime.com/b/barefoot-woman-pants-white-barefoot-woman-pants-white-shirt-standing-tiptoe-vintage-suitcase-beige-224612977.jpg",
        }}
      ></Image>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} color={"white"}></AntDesign>
      </TouchableOpacity>

      {/* Login */}
      <Animated.View
        style={[
          styles.LoginContainer,
          {
            width: width - 30,
            height: height / 1.48,
            transform: [{ translateY: login }],
          },
        ]}
      >
        <Text style={styles.txtLogin}>Log in</Text>
        <BlurView intensity={80} style={styles.blurView} tint="light">
          <TextInput
            placeholder="Email"
            style={styles.txtInput}
            value={email}
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.txtInput}
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => handlerLogin(email, password)}
          >
            <Text style={styles.buttonTextLogin}>Log In</Text>
          </TouchableOpacity>
          <Text
            style={{
              padding: 10,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            or
          </Text>
          <TouchableOpacity style={styles.btnContinue}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png",
              }}
              style={{ height: 32, width: 33 }}
            ></Image>
            <Text style={styles.buttonTextContinue}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContinue}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
              }}
              style={{ height: 32, width: 33 }}
            ></Image>
            <Text style={styles.buttonTextContinue}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContinue}>
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
              }}
              style={{ height: 32, width: 33 }}
            ></Image>
            <Text style={styles.buttonTextContinue}>Continue with Apple</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => signupScreen()}>
              <Text style={{ color: "#DC9100", fontWeight: "bold" }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ marginTop: 10 }}>
            <Text style={{ color: "#DC9100", fontWeight: "bold" }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </BlurView>
      </Animated.View>

      {/* Signup */}
      <Animated.View
        style={[
          styles.LoginContainer,
          {
            height: height / 1.75,
            width: width - 30,
            opacity: sign,
            zIndex: indexSignUp,
          },
        ]}
      >
        <Text style={styles.txtLogin}>Sign up</Text>
        <BlurView intensity={80} style={styles.blurView} tint="light">
          <Text style={styles.txtsign}>
            Look like you don't have an account.
          </Text>
          <Text style={[styles.txtsign, { paddingBottom: 15 }]}>
            Let's create a new account.
          </Text>
          <TextInput
            placeholder="Name"
            style={styles.txtInput}
            value={nameSignUp}
            onChangeText={setNameSignUp}
          ></TextInput>
          <TextInput
            placeholder="Email"
            style={styles.txtInput}
            value={emailSignUp}
            onChangeText={setEmailSignUp}
          ></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.txtInput}
            value={passwordSignUp}
            onChangeText={setPasswordSignUp}
          ></TextInput>
          <Text style={[styles.txtsign, { paddingTop: 10 }]}>
            By selecting Argee and continue belwow.
          </Text>
          <Text style={[styles.txtsign, { marginBottom: 10 }]}>
            I argee to Terms of Service and Privacy Policy.
          </Text>
          <TouchableOpacity
            style={[styles.btnLogin, { marginTop: 10 }]}
            onPress={() =>handlerSigUp(User(emailSignUp,passwordSignUp,nameSignUp,"","",""))}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Agree and Continue
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Joined us before? </Text>
            <TouchableOpacity onPress={() => loginScreen()}>
              <Text style={styles.txtsign}>Log in</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LoginContainer: {
    position: "absolute",
    margin: 15,
    top: "14%",
  },
  blurView: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 10,
    padding: 30,
  },
  txtLogin: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
    paddingLeft: 25,
  },
  icon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  btnLogin: {
    height: 57,
    width: "100%",
    backgroundColor: "#DC9100",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    paddingBottom: 10,
  },
  buttonTextLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  btnContinue: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 57,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonTextContinue: {
    color: "black",
    textAlign: "center",
    width: "90%",
    fontWeight: "bold",
    fontSize: 15,
  },
  txtsign: {
    color: "#DC9100",
    fontWeight: "bold",
  },
});
