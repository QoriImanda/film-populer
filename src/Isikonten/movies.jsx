import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Mousewheel } from "swiper";

const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/all/day`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            console.log('movies =>', result.data.results)
            setMovies(result.data.results)
        })
    }, [])

    const [moviesweek, setMoviesWeek] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/all/week`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            console.log('movies =>', result.data.results)
            setMoviesWeek(result.data.results)
        })
    }, [])

    const [moviesmuvie, setMoviesMovie] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/week`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            console.log('movies =>', result.data.results)
            setMoviesMovie(result.data.results)
        })
    }, [])

    const [moviestv, setMoviesTv] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/tv/week`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            console.log('movies =>', result.data.results)
            setMoviesTv(result.data.results)
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 g-0">
                    <Swiper
                        slidesPerView={4}
                        // spaceBetween={0}
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
                                            <div className="btn-group-ee">
                                                <small className="text-muted">Release : {result.release_date}</small>
                                                <small className="text-muted"> Media Type : {result.media_type}</small>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </div>

            <div className="sekat">
                <p className="font-responsive">Trending Week</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 g-0">
                    <Swiper
                        slidesPerView={4}
                        // spaceBetween={0}
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={true}
                        mousewheel={true}
                        modules={[Pagination, Navigation, Mousewheel]}
                        className="mySwiper"
                    >

                        {moviesweek.map((result, index) => {
                            return (
                                <SwiperSlide className="Swiper-responsive">
                                    <div class="card margin" key={index}>
                                        <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{result.original_title}</h5>
                                            <p class="card-text">{result.overview}</p>
                                            <div className="btn-group-ee">
                                                <small className="text-muted">Release : {result.release_date}</small>
                                                <small className="text-muted"> Media Type : {result.media_type}</small>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </div>

            <div className="margin-bottom" id="movie"></div>
            <div className="sekat">
                <p className="font-responsive">Movie</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 g-0">
                    <Swiper
                        slidesPerView={4}
                        // spaceBetween={0}
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={true}
                        mousewheel={true}
                        modules={[Pagination, Navigation, Mousewheel]}
                        className="mySwiper"
                    >

                        {moviesmuvie.map((result, index) => {
                            return (
                                <SwiperSlide className="Swiper-responsive">
                                    <div class="card margin" key={index}>
                                        <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{result.original_title}</h5>
                                            <p class="card-text">{result.overview}</p>
                                            <div className="btn-group-ee">
                                                <small className="text-muted">Release : {result.release_date}</small>
                                                <small className="text-muted"> Media Type : {result.media_type}</small>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </div>

            <div className="margin-bottom" id="tv"></div>
            <div className="sekat">
                <p className="font-responsive">Tv</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 g-0">
                    <Swiper
                        slidesPerView={4}
                        // spaceBetween={0}
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={true}
                        mousewheel={true}
                        modules={[Pagination, Navigation, Mousewheel]}
                        className="mySwiper"
                    >

                        {moviestv.map((result, index) => {
                            return (
                                <SwiperSlide className="Swiper-responsive">
                                    <div class="card margin" key={index}>
                                        <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{result.original_title}</h5>
                                            <p class="card-text">{result.overview}</p>
                                            <div className="btn-group-ee">
                                                <small className="text-muted">Release : {result.release_date}</small>
                                                <small className="text-muted"> Media Type : {result.media_type}</small>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Movies;