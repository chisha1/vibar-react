import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Background from './components/Background/Background'
import Artists from './components/artists'

//TEMP CSS: remove when intergration is done
//import './App.css';
import './CSS/artist_page.css';
import './CSS/Menu/menu.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/*<Navbar />*/}
                    <Background />
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/artists' component={Artists} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;