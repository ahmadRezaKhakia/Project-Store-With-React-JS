/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';

//functions
import { shorten , isInCart , quantityCount } from '../../helper/functions';

//Redux


//Icons
import trashIcons from '../../assets/icons/trash.svg'; 

//Styles
import Styles from "./Product.module.css";

//Actions
import { addItem ,removeItem,increase,decrease} from '../../redux/cart/cartAction';

const product = ({ productData }) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

   
  return (
      <div className={Styles.container}>
          <img className={Styles.cardImage} src={productData.image} alt="product" />
          <h3>{shorten(productData.title)}</h3>
          <p>{`${productData.price} $`}</p>
          <div className={Styles.linkContainer}>
              <Link className={Styles.link} to={`/products/${productData.id}`}>details</Link>
              <div className={Styles.buttonContainer}>
                  {quantityCount(state,productData.id) > 1 && <button className={Styles.smallButton} onClick={()=>{dispatch(decrease(productData))}}>-</button>}
                  {quantityCount(state, productData.id) === 1 && <button className={Styles.smallButton} onClick={() => { dispatch(removeItem(productData)) }}><img src={trashIcons} alt='trash' /></button>}
                  {quantityCount(state, productData.id) > 0 && <span className={Styles.counter}>{quantityCount(state, productData.id)}</span>}
                  {
                      isInCart(state, productData.id) ?
                          <button className={Styles.smallButton} onClick={() => { dispatch(increase(productData)) }}>+</button> :
                          <button onClick={() => { dispatch(addItem(productData)) }}>Add to Cart</button>
                  }
              </div>
          </div>
    </div>
  )
}

export default product;