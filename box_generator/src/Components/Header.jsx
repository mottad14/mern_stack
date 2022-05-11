import React from "react";

const headerStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, green)', 
    color: '#fff',
    width: "100%",
    height: "80px"
};

const Header= ()=> {
    return (<div style={headerStyle}> This is my Header Component! </div>)
}

export default Header;