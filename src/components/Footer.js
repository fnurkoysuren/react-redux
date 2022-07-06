import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage, setDarkMode } from '../store/site'

function Footer() {

    const { dark, language } = useSelector((state) => state.site)
    const languages = ['tr', 'en']
    const dispatch = useDispatch()

    return (<>
        <div>Footer</div>
        <div>
            {
                languages.map((lang, index) => {
                    return <span key={index}>
                        <button onClick={() => dispatch(setLanguage(lang))} className={lang == language ?  'active' : ''}>{lang}</button>
                    </span>
                })
            }
        </div>
        <div>
            <button onClick={() => dispatch(setDarkMode(dark))}>{dark ? "light" : "dark"}</button>
        </div>
    </>)
}

export default Footer