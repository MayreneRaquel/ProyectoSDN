import React, {Component} from 'react';
import {datos} from './resources/datos.json'
import './CSS/Tabla.css'
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next';

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };    
	}
    
    render() {
        const { datos } = this.state;
        const columns = [{
          dataField: 'id',
          text: 'Product ID'
        }, {
          dataField: 'name',
          text: 'Product Name'
        }, {
          dataField: 'price',
          text: 'Product Price'
        }];
        const rows = [
            {
              id: 1,
              name: 'TV',
              'price': 1000
            },
            {
              id: 2,
              name: 'Mobile',
              'price': 500
            },
            {
              id: 3,
              name: 'Book',
              'price': 20
            }
        ];
        

        return (
            <div className="container-fluid">
                <link href="CSS/Tabla.css" rel="stylesheet" type="text/css"/>

                <BootstrapTable keyField='id' data={ rows } columns={ columns } /> 

            </div>
        );
    }
}
  
export default Tabla;