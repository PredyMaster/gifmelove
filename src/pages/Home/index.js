import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["Matrix", "Rick", "Patata"]

const Home = () => {

    return (
        <ul>
        {
            POPULAR_GIFS.map(popularGif => {
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`} >Gifs de {popularGif}</Link>
                </li>
            })
        }
        </ul>
    )
}

export default Home;