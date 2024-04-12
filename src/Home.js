import Login from "./Login";
import Header from "./Header";
import Body from "./Body";
import { Routes, Route } from "react-router-dom"
import { useState } from "react";

const Home = () => {

    const [username, setUsername] = useState("Login");


    return (
        <>
            <Header username={username}/>
            <Routes>
                <Route exact path="/" element={<Body />} />
                <Route exact path="/login" element={<Login setUsername={setUsername}/>} />
            </Routes>
        </>
    )
}

export default Home;