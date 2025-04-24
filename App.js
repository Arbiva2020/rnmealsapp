import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
//instead oc Context, we can use Redux:
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//this drawer navigation will be nested in the stack navigation:
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e2b947",
        drawerLabelStyle: { fontSize: 16 },
        drawerType: "front",
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen
        name="All Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Meals"
        component={MealsOverviewScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              headerTitleStyle: { fontWeight: "bold" },
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
              // component={CategoriesScreen}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>
          {/* <CategoriesScreen /> */}
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
