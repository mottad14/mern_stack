import React from "react";

const adStyle = {
    textAlign: "center",
    padding: '5px',
    margin: "5 px",
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, orange, teal)', 
    color: '#fff',
    width: "95%",
    height: "18%",
};

const Advertisement= ()=> {
    return (<div style={adStyle}> This is my Advertisement's Component! </div>)
}

export default Advertisement;