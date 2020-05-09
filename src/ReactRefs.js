//use case : to get input field automaticallly focused on page load and bu ref provide value to another input on button submit

import React, { Component } from 'react'
import FocusInput from './FocusInput';
import ForwardRef from './ForwardRef';

class ReactRefs extends Component {
    constructor(props){
        super(props)
        this.refName= React.createRef()  ; 
        this.refLastName=React.createRef()  ;       // to create ref React.createRef it returns a dom object
    }
    componentDidMount(){
        this.refName.current.focus() ;            
    }
    buttonClick=()=>{
        
        console.log(this.refName.current) ;
        console.log(this.refLastName.current) ;
        this.refLastName.current.placeholder = this.refName.current.value ;
        
    }

    render() {
        return (
            <div>
                <h3>Login</h3><br/>
                {/* attach the created ref to the tag  by reserved keyword "ref"*/}
                Name :  <input ref={this.refName}/><br/>
                Name Copy :<input ref={this.refLastName}/><br/>
                <button onClick={this.buttonClick}>Submit</button>     
                <br/>
                <h3>Attaching Ref to Component</h3>
                <FocusInput/>
                <br/>
                <h3>Forward REF</h3>
                <ForwardRef/>
                
            </div>
        )
    }
}

export default ReactRefs
