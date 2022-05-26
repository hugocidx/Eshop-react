import React from 'react';
import '../styles/Order.scss';

const Order = () => {
    return (
        <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src="./Platzi_YardSale_Icons/flechita.svg" alt="arrow" />
        </div>
    );
}

export default Order;