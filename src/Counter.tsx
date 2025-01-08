import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Component has rendered')
        return () => {
            console.log('Cleanup before next render or unmount')
        }
    }, [count])
    const handleClickIncrement = () => {
        setCount(count + 1)
    }
    const handleClickDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="counter-button" onClick={handleClickIncrement}>Increment</button>
            <button className="counter-button" onClick={handleClickDecrement}>Decrement</button>
            {(count > 0) && <p>Count is a positive number.</p>}
            {(count === 0) && <p>Count is not positive or negative.</p>}
            {(count < 0) && <p>Count is a negative number.</p>}
        </div>
    )
}

export default Counter;