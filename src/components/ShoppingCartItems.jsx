import React from 'react';
import '../styles/shoppingCartItems.scss';

const ShoppingCartItems = () => {
    return (
        <div className="shopping-cart" >
            <figure>
            <img src="https://falabella.scene7.com/is/image/Falabella/882097973_1?wid=800&hei=800&qlt=70" alt="bicicle" />
            </figure>
            <p>Bike</p>
            <p>$700.00</p>
            <img src="./Platzi_YardSale_Icons/icon_close.png" alt="close" />
        </div>
    );
}

export default ShoppingCartItems;