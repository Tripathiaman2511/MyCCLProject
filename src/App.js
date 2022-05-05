import React from'react';
import './App.css'

import Home from './components/HomePage/Home';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Footer from './components/HomePage/Footer'
import Navbar from './components/Navbar/Navbar';



const App=()=>{
    return(<>
    <Router>
        <Navbar/>
    
        <Switch>
            <Route exact path="/" render={()=><Home/>}/>
           
        </Switch>
        <Footer/>
    </Router>
   
       
      
    </>);
}

export default App;