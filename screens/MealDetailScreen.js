import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealInformation from "../components/MealInformation";

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
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingedients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps:</Text>
      </View>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
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
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b947",
    textAlign: "center",
    marginTop: 8,
  },
  subTitleContainer: {
    padding: 5,
    borderBottomColor: "#e2b947",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 24,
  },
});
