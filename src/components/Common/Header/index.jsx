import React from "react"
import "./styles.css"
import SwipeableTemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";



function Header (){
    return (<>
    <div className="navbar">
        <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
        <div className="links">
            <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/compare">
                <p className="link">Compare</p>
            </Link>
            <Link to="/watchlist">
                <p className="link">Watchlist</p>
            </Link>
            <Link to="/dashboard">
            <Button text = {"Dashboard"} />
            </Link>
            {/* <Button text = {"share"} outlined={true} /> */}
        </div>
        <div className="drawer-temp">
            <SwipeableTemporaryDrawer />
        </div>
    </div>
    </>);
}

export default Header