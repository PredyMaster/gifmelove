import { useState, useEffect } from 'react';
import style from './assets/css/pruebas.module.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGif] = useState([]); 
  const [keyword, setKeyword] = useState(['love']);

  //https://www.youtube.com/watch?v=QBLbXgeXMU8 (48:00)
  
  useEffect( () => {
    getGifs({keyword : keyword}).then(gifs => setGif(gifs));
  }, [])
   
  return (
    <div>

      <header className={style.header}>
        <h1 className={style.title}>Gif me <span className={style.heart}>❤</span></h1>
        <input type="text" className={style.search} onChange={event => setKeyword(event.target.value)} placeholder='¿What do you want search?' />
      </header>
      
      <section className='bodyContainer'>
        {
          gifs.map(singleGif => {

            return(
              <div className={style.gifContainer} key={singleGif.title}>
                <img className={style.gifImage} src={singleGif.url} />
                <p className={style.infoGif}>{singleGif.title}</p>
              </div>
            )
            
            
          })
        }
        
      </section>
      
        
    </div>
  );

}

export default App;
