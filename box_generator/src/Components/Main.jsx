import React from "react";
import SubContents from './SubContents';
import Advertisement from "./Advertisement";

const mainStyle = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
   justifyContent: "space-evenly",
    padding: '5px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, yellow, green)', 
    color: '#fff',
    width: "100%",
    height: "550px"
};

const upperMain = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "66%"


}



const Main= ()=> {
    return (<div style={mainStyle}>
        <div style={upperMain}> 
            <SubContents/>
            <SubContents/>
            <SubContents/>
        </div>
    <Advertisement/>
    </div>)
}

export default Main;