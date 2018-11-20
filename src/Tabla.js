import React, {Component} from 'react';
import {datosJson} from './resources/datos.json';
import './CSS/Tabla.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './Principal.js';


class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datitos: this.props.datosJ
        };    
	}

    render() {
        const columns = [{
            dataField: 'id',
            text: 'Categoria'
          }, {
            dataField: 'name',
            text: 'Direccion IP'
          }, {
            dataField: 'price',
            text: 'Cantidad de flujo'
          }];
          
        const rows = [{
            id: 1,
            name: 'TV',
            'price': 1000
        }, {
            id: 2,
            name: 'Mobile',
            'price': 500
        }, {
            id: 3,
            name: 'Book',
            'price': 20
        }];

        return (
            <div className="container">
                <link href="CSS/Tabla.css" rel="stylesheet" type="text/css"/> 
                <BootstrapTable keyField='id' data={ rows } columns={ columns } />
            </div>
        );
    }
}
  
export default Tabla;