import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
import { useEffect } from "react";
const WelcomeScreen = ({ navigation }) => {
  const widthOne = useSharedValue(0);
  const widthTwo = useSharedValue(0);
  const heightOne = useSharedValue(0);
  const heightTwo = useSharedValue(0);
  useEffect(() => {
    setTimeout(() => {
      (widthOne.value = withSpring(350)),
        (widthTwo.value = withSpring(280)),
        (heightOne.value = withSpring(280)),
        (heightTwo.value = withSpring(350));
    }, 1000);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circles}>
        <Animated.View
          style={[styles.circleOne, { width: widthOne, height: heightTwo }]}
        >
          <Animated.View
            style={[styles.circleTwo, { width: widthTwo, height: heightOne }]}
          >
            <Image
              style={styles.welcomeImage}
              source={require("../assets/images/welcome.png")}
            />
          </Animated.View>
        </Animated.View>
      </View>
      <View style={styles.Foody}>
        <Text style={styles.FoodyText}>Foody</Text>
        <Text style={styles.FoodyTextOne}>Food is always rigth</Text>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.amber500,
  },
  welcomeImage: {
    width: 210,
    height: 210,
  },
  circleOne: {
    // width:350,
    // height:350,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 180,
  },
  circles: {
    height: 350,
  },
  circleTwo: {
    // width:280,
    // height:280,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 180,
  },
  Foody: {
    position: "relative",
    textAlign: "center",
    alignItems: "center",
    top: 50,
  },
  FoodyText: {
    fontSize: 70,
    fontWeight: "700",
    color: "white",
  },
  FoodyTextOne: {
    fontSize: 25,
    color: "white",
  },
});
