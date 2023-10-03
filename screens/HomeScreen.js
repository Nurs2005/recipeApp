import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import Icon from "react-native-vector-icons/AntDesign";
import { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Categories from "../components/Categories/Categories";
const HomeScreen = () => {
  const [foodTyps, setFoodtyps] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  console.log(foodTyps);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const fetchCatygys = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFoodtyps(data.categories);
    setActiveCategory(data.categories[0].strCategory);
  };
  useEffect(() => {
    fetchCatygys();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.IconBlock}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/avatar.png")}
        />
        <Icon size={25} name="bells" />
      </View>
      <View style={styles.TextBlock}>
        <Text style={styles.TextBlockOne}>Hello, Norman</Text>
        <Text style={styles.TextBlockTwo}>Make your own food,</Text>
        <Text style={styles.TextBlockTwo}>
          stay at <Text style={styles.TextBlockThree}>Home</Text>{" "}
        </Text>
      </View>
      <View style={styles.InputBlock}>
        <TextInput placeholder="Search any recipe" style={styles.TextInput} />
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Icon style={styles.search1} size={22} name="search1" />
        </TouchableOpacity>
      </View>
        <Categories
          foodTyps={foodTyps}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      <View style={styles.RecipesBlock}>
        <Text>Recipes</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  IconBlock: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  TextBlock: {
    width: "90%",
    marginTop: 15,
  },
  TextBlockOne: {
    fontSize: 18,
  },
  TextBlockTwo: {
    fontSize: 35,
    fontWeight: "600",
  },
  TextBlockThree: {
    fontSize: 35,
    fontWeight: "600",
    color: "orange",
  },
  InputBlock: {
    width: "88%",
    height: "7%",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 30,
    justifyContent: "space-between",
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  TextInput: {
    paddingLeft: 15,
  },
  TouchableOpacity: {
    width: "15%",
    height: "88%",
    backgroundColor: "white",
    borderRadius: 50,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  foods: {
    alignItems: "center",
    padding: 5,
  },
  avatarsMealBlock: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
  },
  avatarsMeal: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  RecipesBlock: {
    height: 450,
  },
});
