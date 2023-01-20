import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles.css";

import { Pagination, Navigation, Mousewheel } from "swiper";

const Terpopuler = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            // console.log('datas =>', result.data.results)
            setMovies(result.data.results)
        })
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 g-0">
                <Swiper 
                    slidesPerView={4}
                    // spaceBetween={30}
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                    mousewheel={true}
                    modules={[Pagination, Navigation, Mousewheel]}
                    className="mySwiper"
                >

                    {movies.map((result, index) => {
                        return (
                            <SwiperSlide className="Swiper-responsive">
                                <div class="card margin" key={index}>
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{result.original_title}</h5>
                                        <p class="card-text">{result.overview}</p>
                                        <div className="btn-group">
                                            <small className="text-muted">Release {result.release_date}</small>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </div>
    )
}

export default Terpopuler;