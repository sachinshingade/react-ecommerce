import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import {addProductToCart} from "../../storeManager/actions";

function AddToCartButton(props) {
    let product = props.product
    const cartProduct = useSelector(state => state.cart.cart)
    // console.log('state ??', cartProduct)
    const dispatch = useDispatch()
    // const check =   cartProduct.map((p)=>{
    //                     console.log("p", p)
    //                     console.log('product', product)
    //                     console.log("p.id === product.id",p.id === product.id)
    //                     if(p.id === product.id) {
    //                         return true
    //                     }
    //                     return false
    //                 })
    // console.log("btn con", check)
    // if(check){
    //     return (
    //         <div className="addMorebtn">
    //             <button className="addBtn"
    //             onClick={() => dispatch(addProductToCart(product))}
    //             >
    //             +
    //             </button> 
    //             <div>1</div> 
    //             <button className="addBtn">
    //             -
    //             </button>
    //         </div>
    //     )
    // } else {
        return (
            <div>
                <button className="addBtn" 
                onClick={() => dispatch(addProductToCart(product))}
                >
                    Add to cart
                </button>
            </div>
        )
//     }
}

export default connect()(AddToCartButton)