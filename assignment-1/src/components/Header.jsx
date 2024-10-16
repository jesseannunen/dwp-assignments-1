import React from "react";


function Header({ image, title }) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={image} alt="Product" style={{ width: '100px', marginRight: '20px' }} />
            <h1>{title}</h1>
        </div>
    );

}

export default Header;