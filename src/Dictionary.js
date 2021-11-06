import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [searchword, setSearchword] = useState("");
    
    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
       // alert(`Searching definition for ${searchword}`);
    
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_us/${searchword}`;
        axios.get(apiUrl).then(handleResponse);
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