import React from "react"

//=======================================

import s from './App__case.module.scss'

const App__case = props => {
    return (
        <div className={ s.wrap } >
            <div className={ s.container } >
                <div className={ s.wrap__text } >
                    <p className={ s.title } > { props.title } </p>

                    <div className={ s.content } >
                        {
                            props.description.map( item => (
                                <div key={ item.id } className={ s.content__wrap } >
                                    <div className={ s.content__dot } />

                                    <p className={ s.content__text } > { item.text } </p>
                                </div>
                            ) )
                        }
                    </div>
                </div>

                <div className={ s.down_bar } onClick={ props.click } >
                    <div className={ s.icon } >

                        <svg className={ s.width_560 } width='137px' height='42px' viewBox="0 0 231 58" fill="none">
                            <path d="M0 58V0H230.59V26C210.5 26 197 44.5 197 58H0Z"/>
                        </svg>

                        <svg className={ s.svg } width='190px' height='48px' viewBox="0 0 231 58" fill="none">
                            <path d="M0 58V0H230.59V26C210.5 26 197 44.5 197 58H0Z"/>
                        </svg>

                        <p className={ s.text_btn } > Заказать </p>
                    </div>

                    <p className={ s.price } > { props.price } </p>
                </div>
            </div>
        </div>
    )
}

export default App__case