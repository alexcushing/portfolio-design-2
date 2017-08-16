import React from 'react';
import './styles/App.scss';
import App from './components/App';
import Nav from './components/Nav';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => (
  <div>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/*" component={App} />
        </Switch>
      </div>
    </Router>
  </div>
);

ReactDOM.render(<Routes />, document.getElementById('root'));

