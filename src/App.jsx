// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '/routes/Home';
import Contact from '/routes/Contact';
import Detail from '/routes/Detail';
import Favs from '/routes/Favs';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contacto" component={Contact} />
        <Route path="/dentist/:id" component={Detail} />
        <Route path="/favs" component={Favs} />
        {/* Otras rutas */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
