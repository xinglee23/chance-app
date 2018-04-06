import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './app.js';
import { counter   } from './index.redux';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension : ()=>{}
));

function render() {
  ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ul>
      <li>
        <Link to='/'>no</Link>
      </li>
      <li>
        <Link to='/erying'>er</Link>
      </li>
      <li>
        <Link to='/qibinglian'>bing</Link>
      </li>
    </ul>
    <Route path='/' component={App}></Route>
    <Route path='/erying' component={qingbinglian}></Route>
    <Route path='/qingbinglian' component={llalfskfjsfh}></Route>
    <App />
     </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
}

render();

store.subscribe(render);


