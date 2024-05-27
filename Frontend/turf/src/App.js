import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import login from './components/pages/login-user';
import signup from './components/pages/signup';
import cricket from './components/pages/Cricket';
import home from './components/pages/Home';
import football from './components/pages/Football';
import cricslot from './components/pages/cricslot';
import footslot from './components/pages/footslot';
import BookingDetails from './components/pages/BookingDetails';
import bookingfoot from './components/pages/Bookingfoot';
import prof from './components/pages/profile';

function App() {
  return (
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={login} />a
            <Route path = "/sign" component={signup}/>a
            <Route path = "/home" component={home}/>a
            <Route path = "/cricket" component={cricket}/>a
            <Route path = "/football" component={football}/>a
            <Route path = "/cricslot" component={cricslot}/>a
            <Route path = "/footslot" component ={footslot}/>a
            <Route path="/booking-details" component={BookingDetails} />a
            <Route path = "/bookfoot" component = {bookingfoot}/>
            <Route path = "/profile" component = {prof}/>a
        </Switch>
    </div>
</Router>
  );
}

export default App;
