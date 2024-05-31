import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Context/Index';

const Details = () => {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavorite } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
        );
        const data = await response.json();
        console.log('Fetched data:', data);

        if (data?.data?.recipes?.length > 0) {
          setRecipeDetailsData(data.recipe);
          setLoading(false);
        } else {
          throw new Error('No recipes found');
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError(error);
        setLoading(false);
      }
    }
    getRecipeDetails();
  }, [id]);

  console.log('Recipe details:', recipeDetailsData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading recipe details: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData.image_url}
            className="w-full h-full object-cover block ground-hover:scale-105 duration-300"
            alt="Recipe"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite()}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium track-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            Save as favorites
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient: any) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
