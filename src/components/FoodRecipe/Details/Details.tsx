import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/Index';

const Details = () => {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
      );
      const data = await response.json();
      console.log('Fetched data:', data);

      if (data?.data?.recipe) {
        setRecipeDetailsData(data.data);
      } else {
        console.error('Unexpected data structure:', data);
      }
    }
    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  console.log('Recipe details:', recipeDetailsData?.recipe?.image_url);

  if (!recipeDetailsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData.recipe.image_url}
            className="w-full h-full object-cover block ground-hover:scale-105 duration-300"
            alt="Recipe"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
