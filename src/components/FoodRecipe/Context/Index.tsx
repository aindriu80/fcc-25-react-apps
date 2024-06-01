import { createContext, useState, ReactNode, ReactElement } from 'react';

interface GlobalContextType {
  searchParam: string;
  loading: boolean;
  recipeList: any[];
  recipeDetailsData: any;
  setSearchParam: (param: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setRecipeDetailsData: (data: any) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam('');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearchParam('');
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favouritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id,
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavouritesList(cpyFavoritesList);
  }

  console.log(loading, recipeList, favouritesList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        setSearchParam,
        handleSubmit,
        handleAddToFavorite,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
