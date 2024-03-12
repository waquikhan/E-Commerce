import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product
