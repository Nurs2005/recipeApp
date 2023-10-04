import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Categories = ({ foodTyps, setActiveCategory, activeCategory }) => {
  const onPress = (name) => {
    setActiveCategory(name);
  };
  console.log(foodTyps)

  return (
    <Animated.ScrollView
      horizontal
      style={styles.foodsScroll}
      entering={FadeInDown.duration(1000)}
    >
      {foodTyps.map((meal) => {
        const backgroundColor =
          activeCategory !== meal.strCategory ? "rgba(0,0,0,0.1)" : "orange";
        return (
          <TouchableOpacity
            onPress={() => {
              onPress(meal.strCategory);
            }}
            key={meal.idCategory}
            style={[styles.foods]}
          >
            <View style={[styles.avatarsMealBlock, { backgroundColor }]}>
              <Image
                style={styles.avatarsMeal}
                source={{ uri: meal.strCategoryThumb }}
              />
            </View>
            <Text>{meal.strCategory}</Text>
          </TouchableOpacity>
        );
      })}
    </Animated.ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  foods: {
    alignItems: "center",
    padding: 5,
  },
  avatarsMealBlock: {
    padding: 5,
    borderRadius: 50,
  },
  avatarsMeal: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  foodsScroll: {
    width: "95%",
    marginTop: 10,
  },
});
