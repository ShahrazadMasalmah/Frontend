import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ProductDetail = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://backend-q315.onrender.com/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error))
    }, [product])

    const removeFromDom =() => {
        axios.delete("https://backend-q315.onrender.com/api/products/" + id)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
        navigate("/products")    
    }

    return(
        <div className="border border-dark p-3 text-center shadow">
            <h1 className="text-primary">{ product.title }</h1>
            <p className="mt-4"><strong>Price:</strong> ${ product.price }</p>
            <p><strong>Description:</strong> { product.description }</p>
            <button className='btn btn-success ms-3' onClick={(e)=>{navigate("/products/" + product._id + "/edit")}}>
                    Edit { product.title }
                </button>
            <DeleteButton successCallback={ removeFromDom } />
        </div>
    );
}

export default ProductDetail;