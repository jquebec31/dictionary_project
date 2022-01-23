import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props) {
    if (props.result) {
        return (
            <div className="Result">
                <section>
                <h2>{props.result.word}</h2>
               
                <Phonetic phonetic={props.result.phonetics[0]} />
                
                </section>
                {props.result.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
        </div>
        );
    } else {
        return null;
    }
    
}