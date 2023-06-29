import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>About page is here.</h1>
            <p>About page is here.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};