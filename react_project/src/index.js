import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

//ReactDOM.render(<Header />, document.getElementById("header"));

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );

//const elem = <h1> Hello World </h1>;
//ReactDOM.render(elem, document.getElementById('root'));
