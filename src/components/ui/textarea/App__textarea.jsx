import React from "react"

//=======================================

import s from './App__textarea.module.scss'

const App__textarea = props => {
    return (
        <div className={ props.error && props.value === '' ? s.error : s.wrap } >
            <textarea
                value={ props.value }
                onChange={ e => props.set( e.target.value ) }
                className={ s.textarea }
                placeholder={ props.placeholder }
            />
        </div>
    )
}

export default App__textarea