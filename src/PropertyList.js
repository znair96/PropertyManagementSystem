import React, { Component } from 'react'

export default class PropertyList extends Component {
    render() {
        const propertyTuple = {
            display:"flex",
            gap:50,
            marginBottom:30
        }
        const imageSection = {
           width:250,
           height:200
        }
        const imageStyle = {
            width:"inherit",
            height: "inherit",
            objectFit:"cover"
        }
        const buttonStyle = {
            border:0,
            backgroundColor:"#dc3545",
            color:"white",
            borderColor:"#dc3545",
            fontSize:16,
            padding:8,
            borderRadius:8,
            height:40,
            width:160,
            cursor:"pointer"
        }
        return (
                  <div style={propertyTuple}>
                  <div style={imageSection}>
                   <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" style={imageStyle}alt="propertyImage" />
                  </div>
                  <div>
                   <h1 style={{marginBottom:20}}>{this.props.property.propertyName}</h1>
                   <p>{this.props.property.area} sq.ft</p>
                   <p>{this.props.property.description}</p>
                   <button style={buttonStyle} onClick={()=> this.props.deleteHandle(this.props.propId)}>Delete</button>
                  </div>
                  </div>    
        )
    }
}