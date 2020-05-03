import React, { useState } from 'react'
import Popup from "reactjs-popup";

//==========================================

import './App.scss'
import App__header from "./components/header/App__header"
import App__nav from "./components/nav/App__nav"
import App__cases from "./components/cases/App__cases"
import App__footer from "./components/footer/App__footer"
import App__modal from "./components/modal/App__modal";

const App = () => {

    const [ open, setOpen ] = useState( false )

    const [ name, setName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ phone, setPhone ] = useState( '' )
    const [ comment, setComment ] = useState( '' )

    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''

    return (
        <div>
            <Popup onClose={ () => setOpen( false ) } onOpen={ () => setOpen( true ) } open={ open } position="center center">
                <App__modal
                    name={ name }
                    setName={ setName }
                    email={ email }
                    setEmail={ setEmail }
                    phone={ phone }
                    setPhone={ setPhone }
                    comment={ comment }
                    setComment={ setComment }
                />
            </Popup>

            <App__header/>

            <App__nav/>

            <App__cases click={ setOpen } />

            <App__footer/>
        </div>
    )
}

export default App
