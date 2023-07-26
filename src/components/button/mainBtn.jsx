import React from 'react'
import './styleBtn.scss';

// {``} means условие
// ${ } means добавить к имени

function Button({ type, title, disable, onClick }) {
    return (
        <button className={
            `btn ${type === 'add' && 'add' || type === 'remove' && 'remove' || type === 'checkout' && 'checkout'
            }`}
            disabled={disable}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button