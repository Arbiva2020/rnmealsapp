import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  // isFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    //i accpect to get id as a parameter and then i will add it to the favoriteMealIds array.
    // i create a new array into which i spread all of the exsiting ids and then add the new id to the end of the array.
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  //when removing items, if the mealId is equal to the id that i want to remove, i will filter it out of the array and return a new array with all of the other ids.
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavoriteMeal: addFavorite,
    removeFavoriteMeal: removeFavorite,
    // isFavorite: isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
