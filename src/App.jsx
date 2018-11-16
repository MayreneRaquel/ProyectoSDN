import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Tabla from './Tabla.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
			
        };    
	}

    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Route path="/" exact strict render={
						    () =>{
							    return (
								    <div>
                                        <Tabla/>
								    </div>
							    );
						    }
					    }/>
                        <switch>
                        <Route exact path="/Tabla" component={Tabla}/>
                        </switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;