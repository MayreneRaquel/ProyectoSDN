import React, {Component} from 'react';
import datos from './resources/datos.json'
import './CSS/Tabla.css'
import 'bootstrap/dist/css/bootstrap.css';

class Principal extends Component {
    constructor() {
        super();
	}

    render() {
        return(
            <div>
                <div class="jumbotron text-center">
                    <h1>Visualizador de trafico de red</h1>
                    <p>Recopila informacion de interes para el administrador de red.</p>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                        <div class="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                        <div class="col-sm-4">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Principal;