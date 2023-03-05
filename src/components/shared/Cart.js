import React  from 'react'
import { useDispatch } from 'react-redux';

//function
import { shorten } from '../../helper/functions';

//Icons
import trash from '../../assets/icons/trash.svg';

//Styles
import Styles from './Cart.module.css';

//Action 
import { removeItem, decrease, increase } from '../../redux/cart/cartAction';

export const Cart = (props) => {

    const  dispatch  = useDispatch();

    const { image, title, price, quantity } = props.data;

  return (
      <div className={Styles.container}>
          <img className={Styles.productImage} src={image} alt="product" />
          <div className={Styles.data}>
              <h3>{shorten(title)}</h3>
              <p>{price}$</p>
              <div>
                  <span className={Styles.quantity}>{quantity}</span>
              </div>
          </div>
          <div className={Styles.buttonContainer}>
              {
                  quantity > 1 ?
                      <button onClick={() => { dispatch(decrease(props.data)) }}>-</button> :
                      <button onClick={() => { dispatch(removeItem(props.data)) }}><img src={trash} alt='trash'/></button>     
              }
              <button onClick={() => dispatch(increase(props.data))}>+</button>
          </div>
    </div>
  )
}
