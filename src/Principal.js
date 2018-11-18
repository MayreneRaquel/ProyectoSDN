import React, {Component} from 'react';
import {datosJson} from './resources/datos.json'
import './CSS/Tabla.css'
import 'bootstrap/dist/css/bootstrap.css';

class Principal extends Component {

    
    constructor() {
        super();
        this.leerDatosMonitor = this.leerDatosMonitor.bind(this);

        this.state = {
            datosJ : null,
        };
	}

    /* 
    https://carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/ 
    https://davidwalsh.name/fetch 
    https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    https://www.robinwieruch.de/react-fetching-data/
    https://stackoverflow.com/questions/47417217/where-to-declare-variable-in-react-js
    https://addons.mozilla.org/en-US/firefox/addon/react-devtools/     
    */

    componentDidMount(){
        this.leerDatosMonitor();        
    }
    
    leerDatosMonitor(){
        // Replace ./data.json with your JSON feed
        fetch('http://localhost:8080/datos.json').then(response => {
            return response.json();
        }).then(data => {
            // Work with JSON data here
            this.setState(state => ({
                datosJ: data
            }));
            console.log(data);
        }).catch(err => {
            // Do something for an error here
            console.error('Error:', err);
        }); 
    }

    render() {
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1>Visualizador de trafico de red</h1>
                    <p>Recopila informacion de interes para el administrador de red.</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                        <div className="col-sm-4">
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