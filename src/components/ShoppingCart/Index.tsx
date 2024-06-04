import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Index';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

const ShoppingCartHome = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default ShoppingCartHome;
