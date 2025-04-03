import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";

function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
