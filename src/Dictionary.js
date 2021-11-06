import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [searchword, setSearchword] = useState("");
    
    function search(event) {
        event.preventDefault();
        alert(`Searching definition for ${searchword}`);
    }

    function handleSearchwordChange(event) {
        setSearchword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleSearchwordChange}/>

            </form>
        </div>
    )
}