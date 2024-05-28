import { Route, Routes } from 'react-router-dom';
import Details from './Details/Details';
import Favorites from './Favorites/Favorites';
import FoodHome from './FoodHome/FoodHome';
import Navbar from './Navbar/Navbar';

const FoodRecipe = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodHome />} />
        <Route path="/favourites" element={<Favorites />}></Route>
        <Route path="/recipe-item/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default FoodRecipe;
