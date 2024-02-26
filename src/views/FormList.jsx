import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const FormList = props => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get("https://backend-q315.onrender.com/api/products")
            .then(res => {
                //console.log(res.data.products);
                setProducts(res.data);
            })
            .catch(error => console.log(error));
    }, [products])

    const removeFromDom = productId => {
        axios.delete("https://backend-q315.onrender.com/api/products/" + productId)
            .then((res) => {
                console.log(res.data)
                setProducts(products.filter(product => product._id !== productId));
            })
            .catch((err) => console.log(err))
    }

    //make a post request to create a product
    const createProduct = product => {
        axios.post("https://backend-q315.onrender.com/api/products", product)
            .then(res => setProducts([...products, res.data]))
            .catch(err=>console.log("Error: ", err))
    }

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} 
            initialDescription="" />
            <hr />
            <ProductList products={ products } removeFromDom={ removeFromDom } />
        </div>
    );
}

export default FormList;