import React from 'react'; 
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Details from './pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css' ;

function App() {
  return (
    <Router>
      <Switch> 
      <div className="App">
        <Route exact path="/">
          <Home /> 
        </Route>  
            <Route path="/Details/:id">
                <Details  />
            </Route> 
      </div>
      </Switch> 
    </Router>
    
  );
}

export default App;
