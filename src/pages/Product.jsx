import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import BreadCrum from '../components/breadCrum/BreadCrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
const Product = () => {
  const{all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product= all_product?.find((e)=>e.id === Number(productId))
  // product id which is in string format converted into number

  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product