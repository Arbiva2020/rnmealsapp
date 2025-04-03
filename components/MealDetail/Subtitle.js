import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
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
    marginHorizontal: 12,
  },
});
