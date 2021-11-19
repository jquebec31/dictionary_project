import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {
    let [searchword, setSearchword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResult(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //from https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001f6a15cf145ca4744aa9f4207b26d5dd4";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers })
            .then(handlePexelsResponse);
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
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}
 