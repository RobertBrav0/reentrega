import { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({stock, initial , onAdd})=> {
    const [quantity, setQauntity] = useState(initial)

    function increment() {
        if (quantity < stock) {
            setQauntity(quantity + 1)
        }
    }
    function decrement() {
        if (quantity > 1) {
            setQauntity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
            <button className='Button' onClick={decrement}>-</button>
            <h4 className='Number'>{quantity}</h4>
            <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agragar al Carrito
                </button>
            </div>
            

        </div>
    )
}

