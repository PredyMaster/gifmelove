import React from "react";
import style from '../assets/css/pruebas.module.css';
import { Link, useLocation } from 'wouter';

const Header = ( {keyword, setKeyword} ) => {
    const [path, pushLocation] = useLocation();

    const handleChange = e => {
        const searchGif = e.target.value;
        setKeyword(searchGif);
    }

    const handleSubmit = e => {
        e.preventDefault();
        e.target[0].value = '';
        pushLocation(`/search/${keyword}`);

        console.log("SUBMIT" + path)
    }

    return (
        <header className={style.header}>
            <Link to="/search/love"><h1 className={style.title}>Gif me <span className={style.heart}>❤</span></h1></Link>

            <form onSubmit={handleSubmit}>
                <input type="text" className={style.search} onChange={handleChange} placeholder='¿What do you want search?' />
            </form>

        </header>
    )
}

export default Header;