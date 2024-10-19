import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import all_product from '../Assets/all_product';

function CartItems() {

    const{all_producte,cartItems,removeFromCart,addToCart}=useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p> Add</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format">
                    <img src={e.image} className='carrticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <button style={{border:'none', background:'transparent'}} onClick={()=>{addToCart(e.id)}}> ➕</button>
                  
                    <p>$    {e.new_price* cartItems[e.id]}</p>
                   
                    {/* <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" /> */}
                    <button style={{border:'none', background:'transparent'}} onClick={()=>{removeFromCart(e.id)}}> ❌</button>

                </div>
            </div>
            }
        })}
        
    </div>
  )
}

export default CartItems