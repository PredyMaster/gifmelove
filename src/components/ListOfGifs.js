import React from 'react';
import useGifs from '../hooks/useGifs';
import Gif from './Gif';
import style from '../assets/css/pruebas.module.css';


const ListOfGifs = ({params}) => {

    const {keyword} = params; 
    const {gifs, page, setPage} = useGifs({ keyword: keyword }); //Custom Hook
    console.log("ListofGifs");

    const handleNextPage = (direction) => {
        console.log("handlenextPage de List of Gifs")

        //Podemos sacar el valor page desde el setPage
        direction ? setPage(previousPage => previousPage+1) : setPage(previousPage => previousPage-1);

    }

    return (

        <React.Fragment>
            {
               gifs.results.map(({id, title, url}) => {
                    return(
                    <Gif key={id} title={title} url={url} />
                    )
                })  
            }

            <div className={style.contentButtons}>

                { page >= 1 &&
                    <button className={style.butChangePage} onClick={() => handleNextPage(false)}>Previous Page</button>
                }
                
                <button className={style.butChangePage} onClick={() => handleNextPage(true)}>Next Page</button>

            </div>
            
           
        </React.Fragment>
        
    )

}

export default ListOfGifs