import React from "react";

const navStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, blue, green)', 
    color: '#fff',
    width: "18%",
    height: "550px"
};

const Navigation= ()=> {
    return (<div style={navStyle} > This is my Navigation Component! </div>)
}

export default Navigation;