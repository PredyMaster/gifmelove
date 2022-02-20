import React from 'react';
import useGifs from '../hooks/useGifs';
import Gif from './Gif';


const ListOfGifs = ({params}) => {

    const {keyword} = params; 
    const {gifs} = useGifs({ keyword: keyword }); //Custom Hook
    console.log("A");

    return (

        <React.Fragment>
            {
               gifs.results.map(({id, title, url}) => {
                    return(
                    <Gif key={id} title={title} url={url} />
                    )
                })  
            }
           
        </React.Fragment>
        
    )

}

export default ListOfGifs