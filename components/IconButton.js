import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, onTapped, icon, color }) {
  return (
    <Pressable
      onPress={onTapped}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
