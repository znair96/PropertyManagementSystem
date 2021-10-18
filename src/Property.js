import React, { Component } from 'react'
import PropertyList from './PropertyList'
import AddPropertyDetailsModal from "./AddPropertyDetailsModal";

export default class Property extends Component {
    constructor(){
        super();
        this.state = {
            propertylist:[{
                id:"1",
                propertyName:"DDA Flats",
                area:800,
                description:"3BHK flat with good ambience, Park Nearby and swimming pool and have a good placement"
            },{
              id:"2",
              propertyName:"ABC Society",
              area:950,
              description:"3BHK flat with good ambience, Park Nearby and swimming pool and have a good placement.fjksfdkhsdjkjhsdfhkfsd"
            },{
                id:"3",
                propertyName:"Sai Baba Society",
                area:950,
                description:"3BHK flat with good ambience, Park Nearby and swimming pool and have a good placement.fjksfdkhsdjkjhsdfhkfsd"
              }]
        }
    }
    onDeleteHandle = (property)=>{
        let arr = this.state.propertylist;
        console.log(arr);
        this.setState({
            propertylist : arr.filter((prop)=>{
                return prop.id !== property.id;
            })
        } 
        )
    }
    
    render() {
        const container = {
            width:"60%",
            margin:"auto",
            marginTop:120
        }
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
            modal.classList.remove("not-visible");
         }
         const addNewPropertyDetails = (name,area,description)=>{
              let property = {};
              property.id = this.state.propertylist.length+1;
              property.propertyName = name;
              property.area = area;
              property.description = description;
              let arr = this.state.propertylist;
              arr.push(property);
              console.log(arr);
              this.setState({
                  propertylist: arr
              });
              let modal = document.getElementById("modal");
              modal.classList.add("not-visible");
         }
        return (
         <>   
            <AddPropertyDetailsModal addProperty={addNewPropertyDetails}/>
            <div style={{position:"relative"}}>
                 <h1 style={{textAlign:"center"}}>Property Management System</h1>
                 <button style={buttonStyle} onClick={addProperty}>Add Property</button> 
            </div>
            <div style={container}>
               {
                   this.state.propertylist.map((propty)=>{
                       return (<PropertyList 
                       key = {propty.id}
                       property = {propty}
                       deleteHandle = {this.onDeleteHandle}
                       />)
                   })
               }  
            </div>
            </>
        )
    }
}
