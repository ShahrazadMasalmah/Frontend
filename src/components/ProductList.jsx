import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { products, removeFromDom } = props;
    const navigate = useNavigate();

    return (
        <div className='text-center'>
        {products.map((product, idx) => {
            return <p key={idx}>
                <Link to={"/products/" + product._id}>
                    {product.title}
                </Link>
                <button className='btn btn-success ms-3' onClick={(e)=>{navigate("/products/" + product._id + "/edit")}}>
                    Edit
                </button>
                <DeleteButton successCallback={ ()=>removeFromDom(product._id) } />
            </p>
        })}
    </div>
    )
}

export default ProductList; 