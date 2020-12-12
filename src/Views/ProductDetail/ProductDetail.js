import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
import AddToCartButton from '../../Components/AddToCartButton/AddToCartButton'
export default function ProductDetail(props) {
    console.log("props", props)
    const [product, setProduct] = useState("");
    let { id } = useParams();
    console.log("id", id)
    useEffect(()=>getProductData(id),[])

    function getProductData(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }
    return(
        product ? (<div className="product-detail">
            <div className="product-detail-container">
                <div className="product-detail-img-container">
                    <img src={product.image}/>
                </div>
                <div className="product-detail-detail-container">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-cat">{product.category}</p>
                    <p className="product-description-title">Description:</p>
                    <p className="product-description">{product.description}</p>
                    <div className="price-btn-row">
                        <div className="price-block">
                            Price: ₹ {product.price}
                        </div>
                        <div className="btn-container">
                            <AddToCartButton product={product}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (
            <div className="loading">
                .....Loading
            </div>
        )
    )
}