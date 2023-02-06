import { useAmp } from "next/amp";
import { useState } from "react"
import Start from "./Start"


export default function () {

    const [name, SetName] = useState("");
    const [isAciveOne, setIsActiveOne] = useState(true);
    const [issActiveTwo, setIsActiveTwo] = useState(false);


    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : "none"}}>
                <h1>Wahat is your name?</h1>
                <input  
                    value={name}
                    onChange={event => SetName (event.target.value)}
                    placeholder ="Enter name"
                    type="text"
                    ></input>
            </div>
            <div style ={{display: isActiveTwo ? 'block' : 'none'}}>

            </div>
        </div>

    )
}