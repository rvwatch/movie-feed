import React, { useState, useEffect } from 'react'
import Cards from './Cards';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    
    // need a snippet of code that runs on a condition
    useEffect(() => {
        console.log('in the useeffect');
        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl);
                console.log(response)
                const result = await response.json();
                console.log(result);
                return result;
    
            } catch (error) {
                
            }
        }
        console.log(fetchData());
        setMovies(fetchData);
    }, []);
    return (
        <div>
           <h2>{title}</h2>
        </div>
    )
}

export default Row
