import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";


export default function Dictionary(props) {
    let [searchword, setSearchword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function search() {
        //from https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        // alert(`Searching definition for ${searchword}`);
          
    }
    function handleSearchwordChange(event) {
        setSearchword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h3> What word are you searching for?</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleSearchwordChange} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        suggested words: sunset, love, travel...
                    </div>
                </section>
                <Result result={result} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}
 