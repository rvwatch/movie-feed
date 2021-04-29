import React, { useEffect } from 'react';
import { Cards } from './Cards';
import { useActions } from "../hooks/useActions";
import ViewAll from './ViewAll';
import './Row.css'

interface RowProps {
    title: string,
    url: string
}


const Row: React.FC<RowProps> = (props: RowProps) => {
    const { getShows } = useActions();
    useEffect((): void => {
        // TODO: Move fetchData() into its own api request file

        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(url);
        //         const shows = await response.json();
        //         if (shows.results.length) {
        //             setMovies(shows.results);
        //         }
        //     } catch (error) {

        //     }
        // }

        // fetchData();
        getShows(props.url);
    }, [props.url]);

    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return (
        <div className="category_wrap">
            <h2>{props.title}</h2>

            <div className='row_cards'>
                <ViewAll />
                {/* {!error && !loading && data.results.map((show: any) => <Cards key={show.id} show={show} />)} */}
            </div>
        </div>
    )
}

export default Row;
