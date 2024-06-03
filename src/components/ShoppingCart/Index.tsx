import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

const ShoppingCartHome = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <h1>Navbar</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default ShoppingCartHome;
