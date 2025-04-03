import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react"; //this is used to update the header title when the screen is loaded.
import { MEALS } from "../data/dummy_data";
import MealInformation from "../components/MealInformation";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId; //this will get the mealId from the route params.

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //this will find the meal object that has the same id as the mealId.

  function headerButtonPressHandler() {
    console.log("Header button pressed!"); //this will log to the console when the header button is pressed.
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me!" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealInformation
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        //the style that we import via props from "MealsInformation.js" to allow more flexability in styiling:
        textStyle={styles.detailText} //this will set the text color to white.
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}></List>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
