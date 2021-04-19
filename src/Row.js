import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import ViewAll from './ViewAll';
import './Row.css'



function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    
    // need a snippet of code that runs on a condition
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl);
                const result = await response.json();
                if(result.results.length){
                    setMovies(result.results);
                }
                return result;
            } catch (error) {
                
            }
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="category_wrap">
           <h2>{title}</h2>
           <div className='row_cards'>
               <ViewAll />
               { movies.map((show, index) => <Cards key={show.id} show={show} />) }
           </div>
        </div>
    )
}

export default Row
