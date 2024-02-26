import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from "../components/ProductForm";

export default (props) => {
    const { id } = useParams();
    // keep track of the inputs
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("https://backend-q315.onrender.com/api/products/" + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(error => console.error(error))
    }, []);

    const updateProduct = product => {
        //make a patch request to update a product
        axios.put("https://backend-q315.onrender.com/api/products/" + id, product)
            .then(res=>console.log("Rsponse: ", res))
            .catch(err=>console.log("Error: ", err))
        navigate("/products")    
    }

    return(
        <>
            {
                loaded && (
                    <ProductForm 
                    onSubmitProp={ updateProduct }
                    initialTitle={ product.title }
                    initialPrice={ product.price }
                    initialDescription={ product.description }
                    />
                )
            }
        </>
    );
}