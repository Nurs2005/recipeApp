import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Recipes = ({ foodRecipes }) => {
    const onPress =()=>{

    }
    console.log(foodRecipes)
  return (
    <View style={styles.RecipesBlock}>
      <Text style={styles.RecipesText}>Recipes</Text>
      <FlatList
        numColumns={2}
        data={foodRecipes}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={styles.imgBlock}
          onPress={onPress}
          id={item.idMeal}
          >
            <Image
              style={styles.avatarsMeall}
              source={{ uri: item.strMealThumb }}
            />
            <Text style={styles.RecipesSubTitle}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
        style={styles.RecipesBlockIn}
      ></FlatList>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  RecipesBlock: {
    width: "90%",
    paddingTop: 15,
  },
  RecipesBlockIn: {
    height: 450,
    width: "100%",
  },
  imgBlock: {
    width: "50%",
    padding: 10,
    alignItems: "center",
  },
  avatarsMeall: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  RecipesText: {
    fontSize: 25,
    fontWeight: "500",
    paddingLeft: 15,
  },
  RecipesSubTitle: {
    fontSize: 10,
  },
});