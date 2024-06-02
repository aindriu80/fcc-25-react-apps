import { createContext, useState, ReactNode, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
interface GlobalContextType {
  searchParam: string;
  loading: boolean;
  recipeList: any[];
  recipeDetailsData: any;
  setSearchParam: (param: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setRecipeDetailsData: (data: any) => void;
  favoritesList: any[];
  handleAddToFavorite: any;
}

export const GlobalContext = createContext<GlobalContextType>({
  searchParam: '',
  loading: false,
  recipeList: [],
  recipeDetailsData: null,
  setSearchParam: () => {},
  handleSubmit: () => {},
  setRecipeDetailsData: () => {},
  favoritesList: [],
  handleAddToFavorite: () => {},
});

export default function GlobalState({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState<any[]>([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState<any>(null);
  const [favoritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

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
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearchParam('');
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    let cpyFavoritesList = [...favoritesList];
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
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
