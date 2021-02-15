import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HotelState from './context/hotel/HotelState';
import Header from './layout/Header';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AlertState from './context/alert/AlertState';
import DashboardScreen from './screens/DashboardScreen';
import Alerts from './components/Alert';


    function App() {
      return (
        <HotelState>
        <AlertState>
        <Router>
           <div className="App">
           <Alerts />
           <Switch>
            <Route exact path='/' component={LoginScreen}/>
            <Route exact path='/register' component={RegisterScreen}/>
            <Route exact path='/dashboard' component={DashboardScreen}/>
           </Switch>
           </div>
    
        </Router>
        </AlertState>
        </HotelState>
      );
    }


export default App;
