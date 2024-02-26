import React from 'react'
    
export default props => {
    const { successCallback } = props;
    
    return (
        <button className='btn btn-danger ms-3' onClick={successCallback}>
            Delete
        </button>
    )
}

