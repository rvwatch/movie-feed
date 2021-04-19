import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import ViewAll from './ViewAll';
import './Row.css'



function Row({ title, url }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        // TODO: Move fetchData() into its own api requests file
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (result.results.length) {
                    setMovies(result.results);
                }
                return result;
            } catch (error) {

            }
        }

        fetchData();
    }, [url]);

    return (
        <div className="category_wrap">
            <h2 id="panel-1" role={title} tabindex="1" aria-labelledby="genre-tv">{title}</h2>
            
            <div className='row_cards'>   
            <ViewAll />
                {movies.map((show, index) => <Cards key={show.id} show={show} />)}
            </div>
        </div>
    )
}

export default Row
