import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux'
import './ProductList.css'
import AddToCartButton from '../AddToCartButton/AddToCartButton'

// const addMoreBtn = (props) =>{
//     (
        
//     )
// }
// const addToCartBtn = (props) => {
//     console.log("props", props)
//     (
        
//     )
// }

function ProductList(props) {
    const [productList, setProductList] = useState("");
    const history = useHistory();
    useEffect(()=>getProductData(),[])

    function getProductData() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json))
    }

    function routeTo (id) {
        console.log("route", id)
        let url = `/product-detail/${id}`
        history.push(url)
    }
    
    
    return(
        <div className="product-List">
            <div className="cards-block">
                {
                    productList ? (productList.map((product, index)=>{
                        return(
                            <div className="card-container" key={index}>
                                {/* <Link to="/product/{product.id}" key={index}> */}
                                <div className="card-img-container" onClick={() => routeTo(product.id)}>
                                    <img src={product.image}/>
                                </div>
                                <div className="card-product-detail">
                                    <h6 className="product-name" onClick={() => routeTo(product.id)}>{product.title}</h6>
                                    <div className="product-price-row">
                                        <p>₹{product.price}</p>
                                        <AddToCartButton product={product}/>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                        )
                    })):( <div className="loading">.....Loading</div>)
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("map state", state)
    return {
        
    }

};
// const mapDispatchToProps = (dispatch) => ({
//     // console.log("action dispatch", dispatch)
//     addProductToCart({product})
// })

export default  connect(mapStateToProps, null)(ProductList)