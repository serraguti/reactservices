import React, { Component } from 'react'

export default class CollatzComponent extends Component {
    state = {
        tabla: []
    }

    generarCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        while (numero != 1){
            if (numero % 2 == 0){
                numero = numero / 2;
            }else{
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState( {
            tabla: aux
        })
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero != this.props.numero){
            this.generarCollatz();
        }
    }

    componentDidMount = () => {
        this.generarCollatz();
    }

    render() {
        return (
        <div>
            <h1>Collatz</h1>
            <ul className="list-group">
                {
                    this.state.tabla.map((num, index) => {
                        return (<li className="list-group-item" key={index}>{num}</li>)
                    })
                }
            </ul>            
        </div>
        )
    }
}
