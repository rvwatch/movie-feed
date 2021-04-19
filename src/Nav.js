import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <ul className='nav'>
            <li><a href="/featured">Featured</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/tv">TV Shows</a></li>
            <li><a href="/networks">Networks</a></li>
            <li><a href="/kids">Kids</a></li>
        </ul>
    )
}

export default Nav

