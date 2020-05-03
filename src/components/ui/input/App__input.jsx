import React from "react"

//========================================

import s from './App__input.module.scss'

const App__input = props => {
    return (
        <div className={ props.error && props.value === '' ? s.error : s.wrap } >
            <input
                value={ props.value }
                onChange={ e => props.set( e.target.value ) }
                className={ s.input }
                type="text"
                placeholder={ props.placeholder }
            />
        </div>
    )
}

export default App__input