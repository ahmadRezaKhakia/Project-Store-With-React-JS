import React from 'react';
import { Link , useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//context


//Styles
import Styles from './ProductDetails.module.css';




const ProductDetails = (props) => {
    const params = useParams();
    const id = params.id; 
  const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const { image, title, description, price, category } = product;


    


    return (
     
      <div className={Styles.container}>
          <img className={Styles.image} src={image} alt="product" />

          <div className={Styles.textContainer}>
              <h3>{title}</h3>
              <p className={Styles.description}>{description}</p>
              <p className={Styles.category}> <span>Category:</span> {category}</p>
              <div className={Styles.buttonContainer}>
                  <span className={Styles.price}>{price} $</span>
                  <Link className={Styles.link} to='/products'>Back to Shop</Link>
                  
              </div>
            </div>
      </div>
            
      
  )
}
export default ProductDetails;