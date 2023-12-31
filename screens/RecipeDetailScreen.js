import { StyleSheet, Text, View, Image,SafeAreaView,ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icone from "react-native-vector-icons/Ionicons";
import IconeR from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import { useEffect, useState } from "react";
const RecipeDetailScreen = ({route }) => {
  const {key} = route.params;
  const [recipes,setRacipse]=useState([])
  const fetchCatyryRecipes = async () => {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${key}`;
    const response = await fetch(URL);
    const data = await response.json();
    setRacipse(data.meals[0]);
    
  };
  useEffect(()=>{
    fetchCatyryRecipes()
  },[])
  console.log(recipes)
  // const recipe = {
  //   idMeal: "52772",
  //   strMeal: "Teriyaki Chicken Casserole",
  //   strDrinkAlternate: null,
  //   strCategory: "Chicken",
  //   strArea: "Japanese",
  //   strInstructions:
  //     "Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
  //   strMealThumb:
  //     "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
  //   strTags: "Meat,Casserole",
  //   strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
  //   strIngredient1: "soy sauce",
  //   strIngredient2: "water",
  //   strIngredient3: "brown sugar",
  //   strIngredient4: "ground ginger",
  //   strIngredient5: "minced garlic",
  //   strIngredient6: "cornstarch",
  //   strIngredient7: "chicken breasts",
  //   strIngredient8: "stir-fry vegetables",
  //   strIngredient9: "brown rice",
  //   strIngredient10: "",
  //   strIngredient11: "",
  //   strIngredient12: "",
  //   strIngredient13: "",
  //   strIngredient14: "",
  //   strIngredient15: "",
  //   strIngredient16: null,
  //   strIngredient17: null,
  //   strIngredient18: null,
  //   strIngredient19: null,
  //   strIngredient20: null,
  //   strMeasure1: "3/4 cup",
  //   strMeasure2: "1/2 cup",
  //   strMeasure3: "1/4 cup",
  //   strMeasure4: "1/2 teaspoon",
  //   strMeasure5: "1/2 teaspoon",
  //   strMeasure6: "4 Tablespoons",
  //   strMeasure7: "2",
  //   strMeasure8: "1 (12 oz.)",
  //   strMeasure9: "3 cups",
  //   strMeasure10: "",
  //   strMeasure11: "",
  //   strMeasure12: "",
  //   strMeasure13: "",
  //   strMeasure14: "",
  //   strMeasure15: "",
  //   strMeasure16: null,
  //   strMeasure17: null,
  //   strMeasure18: null,
  //   strMeasure19: null,
  //   strMeasure20: null,
  //   strSource: null,
  //   strImageSource: null,
  //   strCreativeCommonsConfirmed: null,
  //   dateModified: null,
  // };
  console.log([].strMeal)
  return (
     <ScrollView style={styles.recipeDetailBlockIn}>
      <Image style={styles.avatarsMeall} source={{ uri: recipes.strMealThumb }} />
      <View style={styles.recipeDetailBlockText}>
        <View style={styles.recipeDetailBlockTextIn}>
        <Text style={styles.DetailBlockTextOne}>{recipes.strMeal}</Text>
        <Text style={styles.DetailBlockText}>British</Text>
        </View>
        <View style={styles.coocking}>
          <View style={styles.coockingBlock}>
            <Icon style={styles.coockingBlockIcon} size={50} name='clockcircleo'/>
            <Text style={styles.coockingBlockText}>35</Text>
            <Text>Mins</Text>
          </View>
          <View style={styles.coockingBlock}>
            <Icone style={styles.coockingBlockIcon} size={50} name='people'/>
            <Text style={styles.coockingBlockText}>35</Text>
            <Text>Mins</Text>
          </View>
          <View style={styles.coockingBlock}>
            <IconeR style={styles.coockingBlockIcon} size={50} name='fire'/>
            <Text style={styles.coockingBlockText}>35</Text>
            <Text>Mins</Text>
          </View>
          <View style={styles.coockingBlock}>
            <Octicons style={styles.coockingBlockIcon} size={50} name='stack'/>
            <Text style={styles.coockingBlockText}>35</Text>
            <Text>Mins</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.ingrediantsBlock}>
      <Text style={styles.ingrediantsBlockText}>Ingrediants</Text>
    {[...Array(20).keys()].map((index) => {
      if(recipes[`strIngredient${index + 1}`]){
        return (
          <View key={index} style={styles.ingrediants}>
          <View style={styles.ingrediantsMini}></View>
          <Text style={styles.ingrediantsText}>{recipes[`strMeasure${index +1}`]}</Text>
          <Text>{recipes[`strIngredient${index +1}`]}</Text>
          </View>
        );
      }
      })}
      </ScrollView>
      <Text style={styles.InstractionsText}>Instractions</Text>
      <View style={styles.Instractions}>
        <Text >{recipes.strInstructions}</Text>
      </View>
      </ScrollView>
  );
};
export default RecipeDetailScreen;
const styles = StyleSheet.create({
  recipeDetailBlockIn:{
    width:'100%',
  },
  avatarsMeall: {
    alignSelf:'center',
    width: "100%",
    height: 400,
    borderRadius: 30,
  },
  recipeDetailBlockText:{
    width:'100%',
    marginTop:20,
    alignItems:'center'
  },
  DetailBlockTextOne:{
    fontSize:25,
    fontWeight:'700'
  },
  DetailBlockText:{
    marginTop:5,
    fontSize:15,
  },
  coocking:{
    flexDirection:'row',
    width:'92%',
    alignItems:'center',
    justifyContent:'space-between'
  },
  coockingBlock:{
    width:80,
    height:150,
    backgroundColor:'orange',
    alignItems:'center',
    borderRadius:40,
    justifyContent:'space-beetwen',
    padding:5
  },
  coockingBlockIcon:{
    backgroundColor:'white',
    borderRadius:60,
    padding:8
  },
  coockingBlockText:{
    fontSize:22,
    fontWeight:'700'
  },
  recipeDetailBlockTextIn:{
    width:'100%',
    marginTop:10,
    marginLeft:15,
    marginBottom:15,
  },
  ingrediants:{
    flexDirection:'row',
    paddingLeft:15,
    paddingTop:10
  },
  ingrediantsMini:{
    width:20,
    height:20,
    backgroundColor:'orange',
    borderRadius:50,
  },
  ingrediantsText:{
    paddingRight:13,
    marginLeft:10,
    fontWeight:'500'
  },
  ingrediantsBlock:{
    width:'100%'
  },
  ingrediantsBlockText:{
    paddingLeft:15,
    fontSize:18,
    fontWeight:'600'
  },
  Instractions:{
    width:'100%',
    padding:10
  },
  InstractionsText:{
    paddingTop:10,
    paddingLeft:15,
    fontSize:18,
    fontWeight:'600'
  }
});
