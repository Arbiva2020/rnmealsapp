import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealInformation from "../components/MealInformation";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId; //this will get the mealId from the route params.

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //this will find the meal object that has the same id as the mealId.

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealInformation
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        //the style that we import via props from "MealsInformation.js" to allow more flexability in styiling:
        textStyle={styles.detailText} //this will set the text color to white.
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}></List>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}></List>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
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
});
