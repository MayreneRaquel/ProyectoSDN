import React, {Component} from 'react';
import {datos} from './resources/datos.json'
import './CSS/Tabla.css'
import 'bootstrap/dist/css/bootstrap.css';

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };    
	}
    
    render() {
        const { datos } = this.state;

        return (
            <div className="container-fluid">
                <link href="CSS/Tabla.css" rel="stylesheet" type="text/css"/>
                <div className="container">
                    <div className="col-md-8">
                        <h1 className="titulo">Proyecto SDN</h1>
                        <p>
                            
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h1 className="titulo">Graficos</h1>
                    </div>
                </div>
                
            </div>
        );
    }
}
  
  export default Tabla;