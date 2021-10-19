import React, { Component } from 'react'
import './modal.css';
export default class AddPropertyDetailsModal extends Component {
    constructor(){
        super();
        this.state= {
            name:"",
            area:"",
            description:""
        }
    }
    render() {
        const closeFunction = ()=>{
            // event.preventDefault();
            let modal = document.getElementById("modal");
            modal.classList.add("not-visible");
        }
        const {name,area,description} = this.state;
        return (
            <div id = "modal" className="not-visible">
                <p onClick={closeFunction} style={{cursor:"pointer"}}>X</p>
                <form className="property-form" onSubmit={(event)=>{
                            event.preventDefault();
                            // console.log(this.state);
                            this.props.addProperty(name,area,description);
                            this.setState({
                                name:"",
                                area:"",
                                description:""
                            })
                        }}>
                    <div className="input-field">
                       <label htmlFor="">Property Name</label>
                       <input type="text" 
                       name="propertyname" 
                       id=""
                       value={this.state.name}
                       onChange={e=>this.setState({name: e.target.value})}
                       required />
                    </div>
                    <div className="input-field">
                       <label htmlFor="">Property Size</label>
                       <input type="number" 
                       name="size" 
                       id="" 
                       value={this.state.area}
                       onChange={e=>this.setState({area: e.target.value})}
                       required/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="">Property Description</label>
                       <input type="text" 
                       name="description" 
                       id="" 
                       value={this.state.description}
                       onChange = {e=>this.setState({description: e.target.value})}
                       required/>
                    </div>
                    <div className="submit-button">
                        <button type="submit">Submit</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
