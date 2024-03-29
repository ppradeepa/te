import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/Login';
 import Home from './components/Home/Home';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


import {
    Route,
    Link,
    Redirect,
    Switch,
    BrowserRouter as Router,
  } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/home' component={Home}/>
      
      </Switch>
  </main>
)

const App = () => (
  <div>
    <Main/>
  </div>
)

ReactDOM.render(<Router >
    <App />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
