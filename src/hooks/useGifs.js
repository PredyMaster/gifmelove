import { useState, useEffect} from 'react';
import getGifs from '../services/getGifs';

const useGifs = ({keyword}) => {
    const [gifs, setGif] = useState({ loading: false, results: [] });
       
    useEffect( () => {
        
        //Recuperamos la Keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'love'

        setGif( actualGifs => ({loading:true, results:actualGifs.results}));



        getGifs({keyword : keywordToUse})
            .then(gifs => {
                setGif({ loading:false, results: gifs})
                if(keyword != undefined){
                    localStorage.setItem('lastKeyword', keyword)
                }
                
            });
    }, [keyword])

    console.log(gifs);

    return ({gifs})

}

export default useGifs