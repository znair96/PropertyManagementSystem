import React, { Component } from 'react'

export default class AddProperty extends Component {
    render() {
        const buttonStyle = {
            position:"absolute",
            border:0,
            backgroundColor:"#007bff",
            color:"white",
            borderColor:"#007bff",
            fontSize:16,
            padding:8,
            borderRadius:8,
            marginLeft:"50%",
            height:40,
            width:160,
            right:150,
            cursor:"pointer"
        }
        const addProperty = ()=>{
            let modal = document.getElementById("modal");
            modal.style.display = "block";
        }
        return (
            <div style={{position:"relative"}}>
                <h1 style={{textAlign:"center"}}>Property Management System</h1>
               <button style={buttonStyle} onClick={addProperty}>Add Property</button> 
            </div>
        )
    }
}
