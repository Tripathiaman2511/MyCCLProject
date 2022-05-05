import React,{useEffect} from 'react'
import HeroSection from './HeroSection';
import{ BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Cards from './Cards';
import './Home.css'


const Home=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return(
<>
<Router>
  <Switch>
  <Route exact path="/" >
        <HeroSection/>
        <Cards/>
        </Route>
        
            
      
      </Switch>  
       
        
</Router>
     
</>
    )
}
export default Home