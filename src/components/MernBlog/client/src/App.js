import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import AddNewBlog from './pages/add-blog';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
