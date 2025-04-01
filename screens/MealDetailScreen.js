import { View, Text, StyleSheet } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId; //this will get the mealId from the route params.

  return (
    <View>
      <Text>Meal Detail Screen ({mealId})</Text>
    </View>
  );
}

export default MealDetailScreen;
