import { View, Text, StyleSheet } from "react-native";

//the "style" in the props is not used in this component, but it is a common practice to pass it down to the parent component so that it can be used in the parent component if needed.
//this is a common practice in react native to allow for more flexibility in styling, since we already have the styles defined in the parent component.
//we will add it in the style array below.
function MealInformation({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details , style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}min</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealInformation;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 10,
    textAlign: "center",
  },
});
