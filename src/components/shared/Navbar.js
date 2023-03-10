import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

//context


//Icons
import ShopIcon from '../../assets/icons/shop.svg';

//Styles
import Styles from './Navbar.module.css';

export const Navbar = () => {

   const state = useSelector(state => state.cartState);


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
