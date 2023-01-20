import React from "react";
import Movies from "../Isikonten/movies";
import Terpopuler from "../Isikonten/Terpopuler";


const Content = () => {
    
    return (
        <>
            <div className="margin-bottom" id="discover"></div>
            <div className="sekat">
                <p className="font-responsive">Discover</p>
            </div>
            <Terpopuler/>
            <div className="margin-bottom" id="trending"></div>
            <div className="sekat">
                <p className="font-responsive">Trending Day</p>
            </div>
            <Movies/>
            
        </>
    )
}

export default Content;