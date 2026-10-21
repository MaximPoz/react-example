import React from 'react'
import s from './Stars.module.css'
import Star from './Star'

function Stars({ count }) {
    if (typeof count !== 'number' || count > 5 || count < 1) return ('хуй')


    return (
        <ul className={s.cardBodyStars}>
            {
                Array.from(
                    { length: count },
                    (_, i) => <li key={i}><Star/></li>) //это map функция
            }
        </ul>
    )
}

export default Stars