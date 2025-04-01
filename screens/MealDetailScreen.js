import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealInformation from "../components/MealInformation";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId; //this will get the mealId from the route params.

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //this will find the meal object that has the same id as the mealId.

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealInformation
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <Text>Ingedients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps:</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
