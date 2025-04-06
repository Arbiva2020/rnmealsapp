import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import IconButton from "../components/IconButton";
// import { useLayoutEffect } from "react";

//this is a dumb component that only displays the category tile and handles the press event.
//The logic for what to do when the tile is pressed is handled in the CategoriesScreen component.

function CategoryGridTile({ title, color, onPressEvent, navigation, route }) {


  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressEvent}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    //to make sure thge ripple effect gdoesnt go outside the border radius (this will also cancel the shadow effect in ios so we will add ios specific styling):
    overflow: Platform.OS === "androoid" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
