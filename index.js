import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
function MyInfo() {
  return    (<div><h1>Hello 余丽霞, Happy Mothers Day</h1>
             <p>She is an amazing mother who is willing to teach me life principles as well as academic subjects. I love the mom jokes she makes and her teasing during ping pong. She takes care of me day and night and I appreciate all her effort. Thank you!</p>
             <h2>Traits of her</h2>
             <ul>
                <li>Loving Mom</li>
                <li>Caring Mom</li>
                <li>Hard working Mom</li> 
             </ul></div>)
     
}
*/
    ReactDOM.render(<div>
                <App /></div>, 
                document.getElementById("root"))

/*ReactDOM.render(WHAT DO I WANT TO RENDER, where do i render it to) */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
