/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
 
//Redux
import { fetchProducts } from '../redux/products/productsAction';

//components
import Product from './shared/Product';
import Loadre from './shared/Loadre';

//Styles
import Styles from './Store.module.css';

const Store = () => {

  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState);

  useEffect(() => {
   if(!productsState.products.length) dispatch(fetchProducts());
  },[])

  return (
    <div className={Styles.container}>
          {
            productsState.loading ?
              <Loadre/> :
          productsState.error ?
            <p>something went wrong</p> :
            productsState.products.map(product => <Product
              key={product.id}
              productData={product}
            />)
          }    
    </div>
  )
}
export default Store;