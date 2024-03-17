import React from 'react';
import './Cart.css'

const Cart = ({ addedItems }) => {
    return (
        <div className="cart">
            <h2>Корзина</h2>
            <ul>
                {addedItems.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.price} руб.
                    </li>
                ))}
            </ul>
            <p>Итого: {getTotalPrice(addedItems)} руб.</p>
            <button>Оформить заказ</button>
        </div>
    );
};

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
};

export default Cart;


