import cartReducer from "../../storeManager/reducer/cartReducer";

import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import {addProductToCart, removeProductToCart, decrementCartQuantity, incrementCartQuantity} from "../../storeManager/actions";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import './Cart.css'
function Cart() {
    const cartProduct = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    let total = 0;
    cartProduct.map((pro)=>{
        console.log("pro",pro);
        total = total + pro.total
    })
    console.log("cart", cartProduct)
    console.log("total",total)
    return(
        <div className="cart">
            <div className="cart-block">
                {
                    cartProduct.length > 0 && cartProduct.map((product, index)=>{
                        return(
                            <div className="product-row" key = {index}>
                                <div className="left-block">
                                    <div className="cart-product-img-container">
                                        <img src={product.image}/>
                                    </div>
                                    <h4 className="cart-product-title">{product.title}</h4>
                                </div>
                                <div className="right-block">
                                    <div className="increase-quantity">
                                        <div className="icon-container">
                                            <AddIcon style={{cursor:'pointer', color: '#fff'}} 
                                            onClick={() => dispatch(incrementCartQuantity(product.id))}
                                            />
                                        </div>
                                        <div>
                                            {product.quantity}
                                        </div>
                                        <div className="icon-container">
                                            <RemoveIcon 
                                            style={{cursor:'pointer', color: '#fff'}}
                                            onClick={() => dispatch(decrementCartQuantity(product.id))}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                    ₹ {product.total}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="total-value">
                    Total Cart Value: ₹ {total}
                </div>
                <div className="checkout">
                    <button className="checkoutBtn addBtn">Checkout</button>
                </div>
                
            </div>
        </div>
    )
}
export default connect()(Cart)