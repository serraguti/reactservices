import React, { Component } from 'react'

export default class EmpleadosComponent extends Component {
    componentDidMount = () => {
        
    }

    state = {
        texto: ""
    }

    componentDidUpdate = (oldProps) => {
        //oldProps son los valores anteriores a props
        console.log("Current: " + this.props.iddepartamento);
        console.log("Old: " + oldProps.iddepartamento);
    }

    render() {
        return (
        <div>
            <h1>Empleados Component</h1>
            <h2>{this.state.texto}</h2>
        </div>
        )
    }
}
