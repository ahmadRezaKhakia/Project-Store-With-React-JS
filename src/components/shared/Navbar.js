import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

//context
import { CartContext } from '../../context/CardContextProvider';

//Icons
import ShopIcon from '../../assets/icons/shop.svg';

//Styles
import Styles from './Navbar.module.css';

export const Navbar = () => {

   const {state} =  useContext(CartContext);


  return (
      <div className={Styles.mainContainer}>
          <div className={Styles.container}>
              <Link className={Styles.productLink} to='/products'>Products</Link>
              <div className={Styles.iconContainer}>
                  <Link to='/Cart'><img src={ShopIcon} alt="shop" /></Link>
                  <span>{state.itemsCounter}</span>
              </div>  
          </div>
    </div>
  )
}
