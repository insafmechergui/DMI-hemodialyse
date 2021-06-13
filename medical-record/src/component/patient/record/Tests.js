import React, { Component } from 'react'

export default class Tests extends Component {
    constructor(props){
        super(props)
        this.state = {
            file: []
          }
          this.handleChange = this.handleChange.bind(this)
        }
        handleChange(event) {
          this.setState({
            file: URL.createObjectURL(event.target.files[0])
          })
        }
       render()
{        return (
            <div id="generalInformation">
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>               
                           </div>
        )
    
}
}
