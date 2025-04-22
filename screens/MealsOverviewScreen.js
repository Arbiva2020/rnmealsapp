import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS, Meals } from "../data/dummy_data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation, route }) {
  //this is how we get the categoryId from the route params.
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; //this will return true if the categoryId is in the mealitem.categoryId array.
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title; //this will return the category object that has the same id as the catId.

    navigation.setOptions({
      title: categoryTitle, //this will set the title of the header to the category title.
    });
  }, [catId, navigation]); //this will run when the catId or navigation changes.

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
