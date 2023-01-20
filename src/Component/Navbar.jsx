import React, { Fragment, useEffect, useState } from "react";

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [show, setShow] = useState(false)
    function newFunction() {
        if (show == false) {
            return "collapse navbar-collapse";
        }else{
            return "collapse navbar-collapse show";
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0)
            console.log(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })
    return (
        <div className={`${sticky ? "sticky" : ""}`}>
            <nav class="navbar navbar-expand-md navbar-dark text-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Movies</a>
                    <button onClick={()=> setShow(!show)} class="navbar-toggler" type="button">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={newFunction()}>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=> setShow(!show)} href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=> setShow(!show)} href="#discover">Discover</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=> setShow(!show)} href="#trending">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=> setShow(!show)} href="#movie">Movie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={()=> setShow(!show)} href="#tv">Tv</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )


}

export default Navbar;