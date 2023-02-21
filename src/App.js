import './App.css';
import { Route , Routes , Navigate } from 'react-router-dom'; 

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import { Navbar } from './components/shared/Navbar';
import { ShopCart } from './components/ShopCart';


//Context
// eslint-disable-next-line no-unused-vars
import ProductContextProvider from './context/ProductContextProvider';
import { CardContextProvider } from './context/CardContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/products/:id' element={<ProductDetails/>} /> 
          <Route path='/products' element={<Store/>} />
          <Route path='/Cart' element={<ShopCart/>} />
          <Route path='/*' element={<Navigate to='/products'/> } />
        </Routes>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
