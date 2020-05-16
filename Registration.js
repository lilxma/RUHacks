import React from "react"
import './App.css';
import {Button, ButtonToolbar} from "react-bootstrap"
import {AddModal} from "./AddModal";



class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state={deps:[], addModalShow: false}
    }

  
    
   
render(){
     var id = localStorage.getItem(this.identity);
     let addModalClose=() => this.setState({addModalShow: false})
    

return      <div>
    <div class="logo"></div>
    <header class="heading">Bounty</header>
    <header class="navbar">Join Us</header>
        <div class="crowd"></div>
        <div class="volunteer"></div>
    <button class="button" onClick={this.handle1Click} id="User">User</button>
<button class="button" onClick={this.handle2Click} id= "Volunteer">Volunteer</button> 
    
    
    
    
    <ButtonToolbar>
        <Button
        className="button1"
        variant="primary"
        onClick={()=> this.setState({addModalShow: true})}>
        Registration
        </Button>
        
        
        <AddModal 
        show={this.state.addModalShow}
        onHide={addModalClose}
        identity={id}
    />
        </ButtonToolbar>
        
     </div>
     
}
}

export default Registration
       