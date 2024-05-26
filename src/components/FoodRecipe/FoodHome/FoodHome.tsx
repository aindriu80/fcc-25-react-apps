import { Route, Routes } from 'react-router-dom';
import Details from '../Details/Details';
import Favorites from '../Favorites/Favorites';
import Navbar from '../Navbar/Navbar';

const FoodHome = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<FoodRecipe />} /> */}
        <Route path="/recipe-item/:id" element={<Details />}></Route>
        <Route path="/" element={<Favorites />}></Route>
      </Routes>
      FoodRecipe
    </div>
  );
};

export default FoodHome;
