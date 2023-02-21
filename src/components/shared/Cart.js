import React , {useContext} from 'react'

//context
import { CartContext } from '../../context/CardContextProvider';

//function
import { shorten } from '../../helper/functions';

//Icons
import trash from '../../assets/icons/trash.svg';

//Styles
import Styles from './Cart.module.css';

export const Cart = (props) => {

    const { dispatch } = useContext(CartContext);

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
                      <button onClick={() => { dispatch({ type: "DECREASE", payload: props.data }) }}>-</button> :
                      <button onClick={() => { dispatch({ type: "REMOVE_ITEM", payload: props.data }) }}><img src={trash} alt='trash'/></button>     
              }
              <button onClick={() => dispatch({type:"INCREASE",payload:props.data})}>+</button>
          </div>
    </div>
  )
}
