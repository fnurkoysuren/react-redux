import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

    const { dark, language } = useSelector((state) => state.site)

    return (<>
        <div>Header</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
            </ul>
        </nav>

        <div>
            Dark mode = {dark ? 'true' : 'false'}
        </div>
        <div>
            Language = {language}
        </div>
    </>)
}

export default Header