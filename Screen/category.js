import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import styles from "../styles";
import back from "../assets/img/back.png";
import logo from "../assets/img/logo.png";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import SimpleSelectButton from "react-native-simple-select-button";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { useRoute } from "@react-navigation/native";
import HeaderComponent from "../Components/HeaderComponent";
import { UserProvider } from "../Context/UserContext";

export default function Category({ navigation }) {
  const route = useRoute();
  const { height, width } = Dimensions.get("window");
  const [choise, setChoise] = useState("All");

  var listProducts = new Array();
  // const [inforProduct, setInforProduct] = useState({
  //     id: null,
  //     category: null
  // })

  const checkButton = (category) => {
    setChoise(category);
  };

  const handlerClick = (item) => {
    navigation.navigate("ProductDetail", {
      id: item.id,
      name: item.name,
      describe: item.describe,
      imageModel: item.imageModel,
      imageProduct: item.imageProduct,
      price: item.price,
    });
  };

  const getAllProduct = async () => {
    const starCountRef = ref(database, "products");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  };
  // const getUserData = async (id) => {
  //   const starCountRef = ref(database, "users/" + id);
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setUserData(data);
  //     console.log(userData);
  //   });
  // };

  const [data, setData] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);

  const FlatListProduct = () => {
    if (choise === "All") {
      data.forEach((item) => listProducts.push(item));
    } else {
      data.forEach((item) => {
        if (item.CategoryId === choise) {
          listProducts.push(item);
        }
      });
    }
    return (
      <FlatList
        data={listProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listContainer}>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handlerClick(item)}
              >
                <Image
                  style={styles.imageItem}
                  source={{ uri: item.imageModel }}
                ></Image>

                <View style={styles.itemText}>
                  <View style={{ width: "80%" }}>
                    <Text style={styles.textName}>{item.name}</Text>
                    <Text style={styles.textPrice}>{item.price}$</Text>
                  </View>
                  <TouchableOpacity>
                    <AntDesign
                      name="shoppingcart"
                      size={25}
                      color="#DC9100"
                    ></AntDesign>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={2}
      ></FlatList>
    );
  };

  return (
    <View style={styles.categoryContainer}>
      <UserProvider>
        <HeaderComponent navigation={navigation}></HeaderComponent>
      </UserProvider>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchText}></TextInput>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <TouchableOpacity>
            <Icon name="shopping-search" size={25} color={"gray"}></Icon>
          </TouchableOpacity>
        </IconComponentProvider>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://content.wepik.com/statics/1977648/fashion-banner-blog-10330771page1.jpg",
          }}
          style={{ height: "100%", width: "100%" }}
        ></Image>
      </View>

      <View style={{ height: "11.5%" }}>
        <ScrollView
          contentContainerStyle={styles.listCategory}
          horizontal={true}
        >
          <View style={{ width: 70, marginRight: 60 }}>
            <SimpleSelectButton
              text="All"
              buttonDefaultColor={"#E4E2E2"}
              buttonSelectedColor={"#DC9100"}
              textDefaultColor={"black"}
              textSelectedColor={"white"}
              isChecked={choise === "All" ? true : false}
              onPress={() => checkButton("All")}
            ></SimpleSelectButton>
          </View>

          <View style={{ width: 70, marginRight: 60 }}>
            <SimpleSelectButton
              text="Men"
              buttonDefaultColor={"#E4E2E2"}
              buttonSelectedColor={"#DC9100"}
              textDefaultColor={"black"}
              textSelectedColor={"white"}
              isChecked={choise === "Men" ? true : false}
              onPress={() => checkButton("Men")}
            ></SimpleSelectButton>
          </View>

          <View style={{ width: 80, marginRight: 60 }}>
            <SimpleSelectButton
              text="Women"
              buttonDefaultColor={"#E4E2E2"}
              buttonSelectedColor={"#DC9100"}
              textDefaultColor={"black"}
              textSelectedColor={"white"}
              isChecked={choise === "Women" ? true : false}
              onPress={() => checkButton("Women")}
            ></SimpleSelectButton>
          </View>

          <View style={{ width: 70 }}>
            <SimpleSelectButton
              text="Kid"
              buttonDefaultColor={"#E4E2E2"}
              buttonSelectedColor={"#DC9100"}
              textDefaultColor={"black"}
              textSelectedColor={"white"}
              isChecked={choise === "Kid" ? true : false}
              onPress={() => checkButton("Kid")}
            ></SimpleSelectButton>
          </View>
        </ScrollView>
      </View>

      <View style={{ height: "52%" }}>
        <FlatListProduct></FlatListProduct>
      </View>
    </View>
  );
}
