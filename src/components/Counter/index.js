import React, { useState } from 'react'

function Counter() {
    const[value, setValue] = useState(0)

    const countInc = () => setValue((prev) => prev + 1)
    const countDec = () => setValue((prev) => prev - 1)

    return ( 
        <div>
            <p>{value}</p>
            <button onClick={countInc}>+</button>
            <button onClick={countDec}>-</button>
        </div>
    )
}

export default Counter