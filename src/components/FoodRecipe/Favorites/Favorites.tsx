import { useContext } from 'react';
import { GlobalContext } from '../Context/Index';
import RecipeItem from '../RecipeItem/RecipeItem';

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item: any) => (
          <RecipeItem item={item} key={item.id} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing has been added.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
