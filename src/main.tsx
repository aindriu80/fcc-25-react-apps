import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import GlobalState from './components/FoodRecipe/Context/Index';
import './index.css';
import store from './components/ShoppingCart/Store/Index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      {/* <GlobalState> */}
      <App />
      {/* </GlobalState> */}
      {/* </React.StrictMode> */}
    </Provider>
  </BrowserRouter>,
);
