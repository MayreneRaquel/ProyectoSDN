import React, {Component} from 'react';
import {datosJson} from './resources/datos.json'
import './CSS/Principal.css'
import 'bootstrap/dist/css/bootstrap.css';

class Principal extends Component {

    constructor() {
        super();
        this.leerDatosMonitor = this.leerDatosMonitor.bind(this);
        
        this.state = {
            datosJ : null,
        };   
	}

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
        }); 
    }

    render() {
        return(
            <div>
                <link href="CSS/Principal.css" rel="stylesheet" type="text/css"/>
                <div className="jumbotron text-center">
                    <h1>Visualizador de trafico de red</h1>
                </div>

                <div>
                    <nav className="navbar visible-xs">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>                        
                                </button>
                                <a className="navbar-brand" href="#">Logo</a>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Dashboard</a></li>
                                    <li><a href="#">Age</a></li>
                                    <li><a href="#">Gender</a></li>
                                    <li><a href="#">Geo</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="container-fluid">
                        <div className="row content">
                            <div className="col-sm-2 sidenav hidden-xs">
                                <h1></h1>
                                <ul className="nav flex-column">
                                    <li className="active"><a href="#section1">Dashboard</a></li>
                                    <li><a href="#section2">Age</a></li>
                                    <li><a href="#section3">Gender</a></li>
                                    <li><a href="#section3">Geo</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-sm-9">
                                <div className="well">
                                    <h1>Dashboard</h1>
                                    <p className="pi">Recopila informacion de interes para el administrador de red.</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="well">
                                            <h1>Users</h1>
                                            <p className="pi">1 Million</p> 
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="well">
                                            <h1>Pages</h1>
                                            <p className="pi">100 Million</p> 
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="well">
                                            <h1>Sessions</h1>
                                            <p className="pi">10 Million</p> 
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="well">
                                            <h1>Bounce</h1>
                                            <p className="pi">30%</p> 
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="well">
                                            <h1>Grafica</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="well">
                                            <h1>Tabla</h1>
                                        </div>
                                    </div>
                                </div>
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
