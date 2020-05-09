//using ref to a child component from parent component
//Refs can only be attached with functional component

import React, { Component } from 'react'
import RefToComponent from './RefToComponent';

class FocusInput extends Component {
    constructor(props){
        super(props)
        this.childRef=React.createRef();
    }
    buttonClick=()=>{
        this.childRef.current.focusInputText(); 
    } 
    render() {
        return (
            <div>
                <RefToComponent ref={this.childRef}></RefToComponent>
                <button onClick={this.buttonClick}>Fcous Input</button>   
            </div>
        )
    }
}

export default FocusInput
