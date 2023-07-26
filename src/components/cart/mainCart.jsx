import React from 'react'
import './styleCart.scss'
import Button from '../button/mainBtn'

function Cart({ cartItems, onCheckout }) {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)

    return <div className='cart__container'>
        <p className='cart__text'>
            {cartItems.length === 0 ? 'No items in the cart!' : ''}
            {cartItems.length === 0 ? <br /> : ''}<span className='cart__total'>Total Price: ${totalPrice.toFixed(2)}</span>
        </p>

        <Button title={`${cartItems.length === 0 ? 'Order now!' : 'Checkout'}`}
            type={'checkout'}
            disable={cartItems.length === 0 ? true : false}
            onClick={onCheckout} />
    </div>
}

export default Cart