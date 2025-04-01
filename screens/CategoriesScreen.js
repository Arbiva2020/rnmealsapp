import CategoryGridTile from "../components/CategoryGridTile";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy_data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressEventHandler() {
      //the parameters passed to the function are the props of the CategoryGridTile component and are the params of the "route" in the MealsOverviewScreen component.
      //we can use the navigation prop to navigate to the MealsOverviewScreen and pass the categoryId as a parameter.
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressEvent={pressEventHandler}
      />
    );
  }

  //this function is called when the tile is pressed. It navigates to the MealsOverviewScreen and passes the categoryId as a parameter.
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
