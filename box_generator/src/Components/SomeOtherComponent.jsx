import React, {useState} from 'react';
import StyledBox from './StyledBox';

const Container = {
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "2px",
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, blue, green)', 
    color: '#fff',
    width: "100%",
    height: "550px"
};

const SomeOtherComponent = props => {
    const [color, setColor] = useState([
        "blue", "red"
    ])
    const [input, setInput] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();
        setColor([...color, input]);
        setInput("");
    }

    return(
    <div>
        <div>
        <form onSubmit={submitHandler}>
        <input type="text" onChange={(event)=>{setInput(event.target.value)}} value={input} />
        <input type="submit"/>
        </form>
        </div>

        <div style={Container}>
        {color.map((color, index) => (
            <p key={index} bgColor={color} > {color} <StyledBox bgColor={color}/> </p>
            
        ))
        }
        </div>
    </div>
    );
}
 
export default SomeOtherComponent;
