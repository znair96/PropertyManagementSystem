import React, { Component } from 'react'
import PropertyList from './PropertyList'
import AddPropertyDetailsModal from "./AddPropertyDetailsModal";

export default class Property extends Component {
    constructor(){
        super();
        this.state = {
            propertylist:[],
            loading:true
        }
    }
    onDeleteHandle = async(propid)=>{
        const response = await fetch('https://api.airtable.com/v0/appzW1XQRpdbNNQwO/Table%201/'+propid, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization':'Bearer key6054bZRE8O7G63'
            }
        });
        console.log(response);
        fetch("https://api.airtable.com/v0/appzW1XQRpdbNNQwO/Table%201?api_key=key6054bZRE8O7G63")
        .then(res=>res.json())
        .then((result)=>{
            // console.log(result.records);
            let modal = document.getElementById("modal");
            modal.classList.add("not-visible");
            this.setState({
                propertylist: result.records,
                loading:false
            })
        },
        (err)=>{
            console.log(err);
        })

        // let arr = this.state.propertylist;
        // console.log(arr);
        
        // this.setState({
        //     propertylist : arr.filter((prop)=>{
        //         return prop.fields.id !== property.id;
        //     })
        // } 
        // )
    }
    componentDidMount(){
        fetch("https://api.airtable.com/v0/appzW1XQRpdbNNQwO/Table%201?api_key=key6054bZRE8O7G63")
        .then(res=>res.json())
        .then((result)=>{
            // console.log(result.records);
            this.setState({
                propertylist: result.records,
                loading:false
            })
        },
        (err)=>{
            console.log(err);
        })
        
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
         const addNewPropertyDetails = async(name,area,description)=>{
            //   let property = {};
            //   property.id = this.state.propertylist.length+1;
            //   property.propertyName = name;
            //   property.area = area;
            //   property.description = description;
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                'Authorization' : 'Bearer key6054bZRE8O7G63'},
                body: JSON.stringify({ "records": [
                    {
                      "fields": {
                        "propertyName": name,
                        "area": Number(area),
                        "description": description
                       }
                    } 
                ]})
            };
            const response = await fetch('https://api.airtable.com/v0/appzW1XQRpdbNNQwO/Table%201', requestOptions);
            const data = await response.json();
            alert(data.records[0].fields.propertyName+" added successfully");
            //   let arr = this.state.propertylist;
            //   arr.push(property);
            //   console.log(arr);
            fetch("https://api.airtable.com/v0/appzW1XQRpdbNNQwO/Table%201?api_key=key6054bZRE8O7G63")
            .then(res=>res.json())
            .then((result)=>{
                // console.log(result.records);
                let modal = document.getElementById("modal");
                modal.classList.add("not-visible");
                this.setState({
                    propertylist: result.records,
                    loading:false
                })
            },
            (err)=>{
                console.log(err);
            })
            
         }
        return (
         <>   
            
            <AddPropertyDetailsModal addProperty={addNewPropertyDetails}/>
            <div style={{position:"relative"}}>
                 <h1 style={{textAlign:"center"}}>Property Management System</h1>
                 <button style={buttonStyle} onClick={addProperty}>Add Property</button> 
            </div>
            {this.state.loading && <h1 style={{textAlign:"center"}}>Data is loading....</h1>}
            <div style={container}>
               {
                   this.state.propertylist.map((propty)=>{
                       return (<PropertyList 
                       key = {propty.id}
                       property = {propty.fields}
                       deleteHandle = {this.onDeleteHandle}
                       propId = {propty.id}
                       />)
                   })
               }  
            </div>
            </>
        )
    }
}
