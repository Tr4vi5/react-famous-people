import React, { Component } from 'react';

class Star extends Component {
    constructor(){
        super();
        this.state = { star: { name: '', role: ''} };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.logName = this.logName.bind(this);
    }

    handleNameChange(event){
        let role = this.state.star.role;
        this.setState({
            star: {name: event.target.value, role}
        });
    }

    handleRoleChange(event){
        let name = this.state.star.name;
        this.setState({
            star: {name, role: event.target.value}
        });
    }

    logName(){
        console.log('Star\'s name is ', this.state.star);
    }

    render(){
        return(
            <div>
            <p>{this.state.star.name} is famous for {this.state.star.role}.</p>
            <input onChange={this.handleNameChange} />
            <input onChange={this.handleRoleChange} />
            <button onClick={this.logName}>Console Log Please</button>
            </div>
        );
    }
}

export default Star;