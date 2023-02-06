import { useAmp } from "next/amp";
import { useState } from "react"
import Start from "./Start"


export default function Survey () {

    const [name, SetName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    const passName = (event) => {
        if (event.key === "Enter") {
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }


    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : "none"}}>
                <h1>What is your name?</h1>
                <input  
                    value={name}
                    onChange={event => setName (event.target.value)}
                    placeholder ="Enter name"
                    onKeyDown={passName}
                    type="text"
                    ></input>
            </div>
            <div style ={{display: isActiveTwo ? 'block' : 'none'}}>
                <Start passName={name}/>
            </div>
        </div>

    )
}