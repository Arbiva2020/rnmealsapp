import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import {
  useLayoutEffect,
  useContext,
  useEffect,
  useCallback,
  useState,
  use,
} from "react";
import { MEALS } from "../data/dummy_data";
import MealInformation from "../components/MealInformation";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useNavigation } from "@react-navigation/native";

function MealDetailScreen({ route, navigation }) {
  // const navigation = useNavigation();
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    console.log("useLayoutEffect triggered, mealIsFavorite:", mealIsFavorite);
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          title="Tap me!"
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoritesStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoritesStatusHandler]); //this will set the header button to the navigation options. The second parameter is an array of dependencies that will trigger the useLayoutEffect when changed.

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
