import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../context/CardContextProvider';

//component
import { Cart } from './shared/Cart';

//Styles
import Styles from './ShopCart.module.css';

export const ShopCart = () => {

  const { state, dispatch } = useContext(CartContext);


  return (
      <div className={Styles.container}>
          <div className={Styles.cartContainer}>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
      </div>
      {
        state.itemsCounter > 0 && <div className={Styles.payments}>
          <p><span>Total Items:</span>{state.itemsCounter}</p>
          <p><span>Total Payments:</span>{state.total}</p>
          <div className={Styles.buttonContainer}>
            <button className={Styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}>Check Out</button>
            <button className={Styles.clear} onClick={()=> dispatch({type:"CLEAR"})}>Clear</button>
          </div>
        </div>
      }

      {
         state.itemsCounter === 0 && !state.checkout && <div className={Styles.complete}>
          <h3>Want to Buy?</h3>
          <Link className={Styles.link} to = '/products'>Go to Shop</Link>
        </div>
      }

      {
        state.checkout && state.itemsCounter === 0 && <div className={Styles.complete}>
          <h3>Checked out successfully</h3>
          <Link className={Styles.link} to='/products'>Buy More</Link>
        </div>
      }

    </div>
  )
}
