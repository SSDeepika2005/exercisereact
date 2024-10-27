import React from 'react';
import './Dynamic.css';

const HomeDynamicChild = (props) => {
    
    return (
        <>
        
        <div className="child-container">
            <h2>👉{props.val}👈</h2>
        </div>
       
        </>
    );
}

export default HomeDynamicChild;
