import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './components/ShoppingCart/Store/Index';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/ExpenseTracker/Theme';
// import GlobalState from './components/FoodRecipe/Context/Index';
import GlobalState from './components/ExpenseTracker/Context/Index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <GlobalState>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </GlobalState>
      {/* </React.StrictMode> */}
    </Provider>
  </BrowserRouter>,
);
