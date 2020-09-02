import React from "react";
import loyac from "../../assests/loyac.jpg"
import { Image } from "react-bootstrap"
const Home = () => {
    return (

        <div className="container">
            <Image src={loyac} fluid />
        </div>
    );
}


export default Home;