import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie/`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            // console.log('datas =>', result.data.results)
            setMovies(result.data.results)
        })
    }, [])
    return (

        <div className="header-img">
            <div className="header-judul">
                <div className="animasi">
                    <h4 className="title-header"> Movies</h4>
                    <p className="descp"> Film Terpopuler</p>
                </div>
            </div>
        </div>

    )
}

export default Header;