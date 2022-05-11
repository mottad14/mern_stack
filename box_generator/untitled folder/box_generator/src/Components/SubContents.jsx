import React from "react";

const subStyle = {
    padding: '10px 5px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, red, blue)', 
    color: '#fff',
    width: "29%",
    height: "100%"
};

const SubContents= ()=> {
    return (<div style={subStyle}> This is my Subcontent's Component! </div>)
}

export default SubContents;