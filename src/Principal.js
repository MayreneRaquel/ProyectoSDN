import React, {Component} from 'react';
import {datosJson} from './resources/datos.json';
import './CSS/Principal.css';
import './Tabla.js'
import 'bootstrap/dist/css/bootstrap.css';
import Tabla from './Tabla.js';

class Principal extends Component {
    constructor(props) {
        super(props);

        this.leerDatosMonitor = this.leerDatosMonitor.bind(this);
        this.state = {
            datosJ : []
        };   
	}

    componentDidMount(){
        this.leerDatosMonitor();        
    }
    
    leerDatosMonitor(){
        // Replace ./data.json with your JSON feed
        fetch('http://localhost:8080/datos.json')
        .then(response => {
            return response.json();
        })
        .then(data => { // Work with JSON data here
            this.setState(state => ({
                datosJ: data
            }));
            console.log(data);
        })
        .catch(err => { // Do something for an error here
            console.error('Error:', err);
        });         
    }

    render() {
        /* parse(text: string, reviver?: (key: any, value: any) => any): any */

        return(
            <div>
                <link href="CSS/Principal.css" rel="stylesheet" type="text/css"/>
                <div className="jumbotron text-center">
                    <h1>Visualizador de trafico de red</h1>
                    <p className="pi">Recopila informacion de interes para el administrador de red.</p>
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
                                    <li><a href="#">Tabla</a></li>
                                    <li><a href="#">Grafica</a></li>
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
                                    <li><a href="#section2">Trafico</a></li>
                                    <li><a href="#section3">Tablas</a></li>
                                    <li><a href="#section3">Grafica</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1></h1>
                                    </div>
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
                                            <p className="pi">60%</p> 
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
                                            <h1>Tabla de direcciones</h1>
                                            <Tabla/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Principal;
