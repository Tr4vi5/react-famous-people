import React, { Component } from 'react';

class Star extends Component {
    constructor(){
        super();
        this.state = { name: '', role: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.logName = this.logName.bind(this);
    }


    handleNameChange(event){
        this.setState({name: event.target.value});
    }

    handleRoleChange(event){
        this.setState({role: event.target.value});
    }

    logName(){
        console.log('Star\'s name is ', this.state.name);
        
    }

    render(){
        return(
            <div>
            <p>{this.state.name} is famous for {this.state.role}.</p>
            <input onChange={this.handleNameChange} />
            <input onChange={this.handleRoleChange} />
            <button onClick={this.logName}>Console Log Please</button>
            </div>
        );
    }
}

export default Star;