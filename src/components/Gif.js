import React from 'react';
import style from '../assets/css/pruebas.module.css';

const Gif = ({title, url}) => {

    const infoGif = title ? title : 'Empty';
    const infoGifClean = infoGif.split(' GIF', 1);

    return  (
        <div className={style.gifContainer} key={title}>
            <img loading='lazy' className={style.gifImage} src={url} />
            <p className={style.infoGif}>{infoGifClean}</p>
        </div>
    )
}

export default Gif;