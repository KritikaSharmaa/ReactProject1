import react from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbar/Navbar.jsx';
import './App.css';
import Counter from './Counter/Counter.js'
import store from './Counter/store';
import {Provider} from "react-redux";
import {Route,Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
const App=()=>{
  return(
  <>
  <Navbar/>
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={Counter}/>
      <Route path='/AboutUs' component={AboutUs}/>
    </Switch>
  </Provider>
  </>
  );
}
export default App;