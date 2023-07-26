import React, { useState } from 'react'
import './styleCard.scss'
import Button from '../button/mainBtn';

function Card({ food, onAdd, onRemove }) {
    // the initial state of the quantity is equal to 0
    const [count, setCount] = useState(0);
    const { title, price, Image, id } = food

    const handleIncrement = () => {
        setCount(count + 1)
        onAdd(food)
    }
    const handleDecrement = () => {
        setCount(count - 1)
        onRemove(food)
    }

    return (
        <div className='card'>
            <span className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}>
                {count}
            </span>
            <div className="card__img">
                <img src={Image} alt={title} />
            </div>
            <h4 className="card__title">
                {title} - <span className='cart__price'>${price.toFixed(2)}</span>
            </h4>

            <div className="card__btns">
                <Button title={'+'} type={'add'} onClick={handleIncrement} />

                {count !== 0 ? (
                    <Button title={'-'} type={'remove'} onClick={handleDecrement} />
                ) : ("")}
            </div>
        </div>
    )
}

export default Card