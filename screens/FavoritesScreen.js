import { View, Text, StyleSheet, FlatList } from "react-native";
//instead of useContext, we will switch to useSelector for working with Redux:
// import { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy_data";

function FavoritesScreen({ navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext); //this will be used if we are using Context API.
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); //this will get the ids from the redux store.

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.rootContainer}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
