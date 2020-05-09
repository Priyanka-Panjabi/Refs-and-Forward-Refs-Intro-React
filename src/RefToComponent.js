// how to attach ref to a component

// we will create a method that will focus on input and that method will be called by parent component
import React, { Component } from 'react'

export class RefToComponent extends Component {
    constructor(props){
        super(props)
        this.refVal = React.createRef();
    }
    focusInputText(){
        this.refVal.current.focus(); 
    }
    render() {
        return (
            <div>
                <input ref= { this.refVal }></input>
            </div>
        )
    }
}

export default RefToComponent
