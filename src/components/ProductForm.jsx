import React, { useState } from "react";
import axios from 'axios';

export default (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    // keep track of the inputs
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    //Handle when the form is submitted
    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({title, price, description})

        setTitle("");
        setPrice(0);
        setDescription("");    
    }

    //onChange to update title, price, description
    return(
        <>
            <h1 className="text-primary mb-4">Product Manager</h1>
            <form onSubmit={ handleSubmit }>
            <p>
                <label className="form-label fw-bold">Title:</label>
                <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label className="form-label fw-bold">Price:</label>
                <input className="form-control" type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label className="form-label fw-bold">Description:</label>
                <textarea className="form-control" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <div className="d-flex justify-content-center">
                <input className="btn btn-primary w-50" type="submit" value="Create"/>
            </div>
            
            </form>
        </>
    );
}