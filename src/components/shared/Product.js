import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten , isInCart , quantityCount } from '../../helper/functions';

//context
import { CartContext } from '../../context/CardContextProvider';

//Icons
import trashIcons from '../../assets/icons/trash.svg'; 

//Styles
import Styles from "./Product.module.css";

const product = ({ productData }) => {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const {state,dispatch} = useContext(CartContext);

  return (
      <div className={Styles.container}>
          <img className={Styles.cardImage} src={productData.image} alt="product" />
          <h3>{shorten(productData.title)}</h3>
          <p>{`${productData.price} $`}</p>
          <div className={Styles.linkContainer}>
              <Link className={Styles.link} to={`/products/${productData.id}`}>details</Link>
              <div className={Styles.buttonContainer}>
                  {quantityCount(state,productData.id) > 1 && <button className={Styles.smallButton} onClick={()=>{dispatch({type:"DECREASE",payload:productData})}}>-</button>}
                  {quantityCount(state, productData.id) === 1 && <button className={Styles.smallButton} onClick={() => { dispatch({ type: "REMOVE_ITEM", payload: productData }) }}><img src={trashIcons} alt='trash' /></button>}
                  {quantityCount(state, productData.id) > 0 && <span className={Styles.counter}>{quantityCount(state, productData.id)}</span>}
                  {
                      isInCart(state, productData.id) ?
                          <button className={Styles.smallButton} onClick={() => { dispatch({ type: "INCREASE", payload: productData }) }}>+</button> :
                          <button onClick={() => { dispatch({ type: "ADD_ITEM", payload: productData }) }}>Add to Cart</button>
                  }
              </div>
          </div>
    </div>
  )
}

export default product;