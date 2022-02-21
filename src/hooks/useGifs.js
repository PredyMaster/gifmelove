import { useState, useEffect} from 'react';
import getGifs from '../services/getGifs';

const INITIAL_PAGE = 0;

const useGifs = ({keyword}) => {
    const [gifs, setGif] = useState({ loading: false, results: [] });
    const [page, setPage] = useState(INITIAL_PAGE);

    //Recuperamos la Keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'love'
           
    useEffect( () => {

        setGif( actualGifs => ({loading:true, results:actualGifs.results}));

        getGifs({keyword : keywordToUse})
            .then(gifs => {
                setGif({ loading:false, results: gifs})
                if(keyword != undefined){
                    localStorage.setItem('lastKeyword', keyword)
                }
                console.log("entra aqui");
                
            });
    }, [keyword, keywordToUse])

    useEffect( () => {

        console.log("useEffect de useGifs");

        /* if(page === INITIAL_PAGE){
            return null
        } else{
            getGifs({keyword : keywordToUse, page : page})
            .then( nextGifs => {
                setGif( {results : nextGifs})
            })
        } */

        getGifs({keyword : keywordToUse, page : page})
            .then( nextGifs => {
                setGif( {results : nextGifs})
                console.log("Entra en el segundo aqui")
            })
        

    }, [page, keywordToUse]);

    console.log(gifs);

    return ({gifs, page, setPage})

}

export default useGifs