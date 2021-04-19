import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <ul role="tablist" aria-label="Main Navigation" className='nav'>
            <li><a role="tab" aria-selected="false" tabindex="-1" href="/featured">Featured</a></li>
            <li><a role="tab" aria-selected="false" tabindex="-1"  href="/movies">Movies</a></li>
            <li><a role="tab" aria-selected="true" aria-controls="genre-tv" id="tab-1" tabindex="0" href="/tv">TV Shows</a></li>
            <li><a role="tab" aria-selected="false" tabindex="-1" href="/networks">Networks</a></li>
            <li><a role="tab" aria-selected="false" tabindex="-1" href="/kids">Kids</a></li>
        </ul>
    )
}

export default Nav

