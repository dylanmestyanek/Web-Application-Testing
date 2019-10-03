import React from "react"
import styled from "styled-components"

class Display extends React.Component {
    render(){
        return(
            <DisplayContainer>
                <h1>Game</h1>
                <DisplayTextContainer>
                    <div>
                        <h3>Balls</h3>
                        <p>3</p>
                    </div>
                    <div>
                        <h3>Strikes</h3>
                        <p>4 </p>
                    </div>
                </DisplayTextContainer>
            </DisplayContainer>
        )
    }
}

export default Display;

const DisplayContainer = styled.div`
    background: pink;
`;

const DisplayTextContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-evenly

    div {
        border: 1x solid black;
        background: tan;
        width: 20%;
    }

`;