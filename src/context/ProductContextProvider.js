import React , {useState, useEffect , createContext} from 'react';

//API
import { getProducts } from '../services/api';

//context
export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);
   
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    }
    fetchAPI();
},[])


  return (
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    )
}
export default ProductContextProvider;