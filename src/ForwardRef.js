//Passing ref from parent automatically to it's child and accessing the element in parent
//Rarely used


import React, { Component } from 'react';
import ForwardRefChild from './ForwardRefChild';

class ForwardRef extends Component {
    constructor(props) {
        super(props)
        this.parentRef = React.createRef() ;
    }
    buttonClick=()=>{
        this.parentRef.current.value = this.parentRef.current.value + "  Hello   " ;
        
    }
    
    render() {
        return (
            <div>
                <ForwardRefChild ref ={this.parentRef}></ForwardRefChild>
                <button onClick={this.buttonClick}>ForwardRef</button>
            </div>
        )
    }
}

export default ForwardRef
