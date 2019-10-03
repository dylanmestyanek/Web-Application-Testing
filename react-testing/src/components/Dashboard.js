import React, { useState, useEffect } from "react"

import Display from "./Display"

const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    useEffect(() => {
        if (strikes === 3 || balls === 4){
            setStrikes(0);
            setBalls(0)
        } 
    }, [strikes, balls])

    return(
        <div>
            <Display balls={balls} strikes={strikes}/>
            <div>
                <button data-testid="strikeButton" onClick={() => setStrikes(strikes + 1)}>Strike</button>
                <button data-test-id="ballButton" onClick={() => setBalls(balls + 1)}>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard