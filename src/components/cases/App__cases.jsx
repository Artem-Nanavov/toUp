import React, { useState } from "react"
import Carousel from '@brainhubeu/react-carousel'

//===========================================

import s from './App__cases.module.scss'
import App__case from "../case/App__case"
import '@brainhubeu/react-carousel/lib/style.css'
import App__carousel_btn from "../ui/btn/carousel_btn/App__carousel_btn";

const App__cases = props => {

    const [ value, setValue ] = useState( 0 )

    const width_page = window.innerWidth

    const change = val => {
        setValue( val )
    }

    const standart = [
        {
            id: 1,
            text: 'Настройка таргетированной рекламы ( ВКонтакте, Instagram ).',
        },
        {
            id: 2,
            text: 'Оформление социальных сетей ( ВКонтакте, Instagram ).',
        },
        {
            id: 3,
            text: 'Разработка логотипа.',
        },
        {
            id: 4,
            text: 'Разработка направленного лендинга на конкретный продукт.',
        },
    ]

    const premium = [
        {
            id: 1,
            text: 'Настройка таргетированной рекламы (ВКонтакте, Instagram, Facebook, Tvvitter).'
        },
        {
            id: 2,
            text: 'Оформление социальных сетей (ВКонтакте, Instagram, Facebook, Twitter).'
        },
        {
            id: 3,
            text: 'Разработка направленного лендинга на конкретный продукт.'
        },
        {
            id: 4,
            text: 'Разработка фирменного дизайна.'
        },
        {
            id: 5,
            text: 'Разработка логотипа.'
        },
        {
            id: 6,
            text: 'Разработка линейного чат-бота во ВКонтакте.'
        },
    ]

    const profesion = [
        {
            id: 1,
            text: 'Настройка таргетированной рекламы (ВКонтакте, Instagram, Facebook, Twitter, TikTok).'
        },
        {
            id: 2,
            text: 'Оформление социальных сетей (ВКонтакте, Instagram, Facebook, Twitter, TikTok, Telegram).'
        },
        {
            id: 3,
            text: 'Разработка полноценного веб сайта, под ваши задачи.'
        },
        {
            id: 4,
            text: 'Разработка фирменного дизайна.'
        },
        {
            id: 5,
            text: 'Разработка логотипа.'
        },
        {
            id: 6,
            text: 'Разработка полноценного чат-бота во ВКонтакте, Telegram'
        },
    ]

    return (
        <div className={ s.wrap } >
            <p className={ s.title } > Наши кейсы </p>

            <div className={ s.vector } >
                <div className={ s.subVector } />
                <div className={ s.subVector } />
                <div className={ s.subVector } />
            </div>

            <div className={ s.cases + ' ' + s.standart } >
                <App__case click={ props.click } title='Стандартный кейс' price='29 990 руб' description={ standart } />
                <App__case click={ props.click } title='Премиум кейс' price='59 990 руб' description={ premium } />
                <App__case click={ props.click } title='Профессиональный кейс' price='99 990 руб' description={ profesion } />
            </div>

            <div className={ s.carousel } >
                <Carousel
                    arrowLeft={ <App__carousel_btn rotate={ false } fill='#2C2F33' bg='#FCCA5F' left={ true } /> }
                    arrowRight={ <App__carousel_btn rotate={ true } fill='#fff' bg='#46AD70' left={ false } /> }
                    addArrowClickHandler
                    slidesPerPage={ 1 }
                    value={ value }
                    arrows
                    infinite
                    onChange={ change }
                    slides={[
                        (
                            <App__case click={ props.click } title='Стандартный кейс' price='29 990 руб' description={ standart } />
                        ),
                        (
                            <App__case click={ props.click } title='Премиум кейс' price='59 990 руб' description={ premium } />
                        ),
                        (
                            <App__case click={ props.click } title='Профессиональный кейс' price='99 990 руб' description={ profesion } />
                        ),

                    ]}
                />
            </div>

            <div className='slider' >
                <Carousel
                    arrowLeft={
                        <svg className={ s.svg } width="13" height="25" viewBox="0 0 15 33" >
                            <path d="M-8.08661e-07 16.5L15 0.47853L15 32.5215L-8.08661e-07 16.5Z"/>
                        </svg>
                    }
                    arrowRight={
                        <svg className={ s.rotate + ' ' + s.svg } width="13" height="25" viewBox="0 0 15 33" >
                            <path d="M-8.08661e-07 16.5L15 0.47853L15 32.5215L-8.08661e-07 16.5Z"/>
                        </svg>
                    }
                    addArrowClickHandler
                    slidesPerPage={ 1 }
                    value={ value }
                    arrows
                    infinite
                    onChange={ change }
                    slides={[
                        (
                            <App__case click={ props.click } title='Стандартный кейс' price='29 990 руб' description={ standart } />
                        ),
                        (
                            <App__case click={ props.click } title='Премиум кейс' price='59 990 руб' description={ premium } />
                        ),
                        (
                            <App__case click={ props.click } title='Профессиональный кейс' price='99 990 руб' description={ profesion } />
                        ),

                    ]}
                />
            </div>

        </div>
    )
}

export default App__cases