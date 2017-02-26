// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import EditPage from './back/EditPage';
import ListPage from './front/ListPage';
import DetailsPage from './front/DetailsPage';
import Header from './common/Header';


const App = () => (
	
  	<Router history={browserHistory}>
  		<Route path="/" component={Header}>
    		<IndexRoute component={ListPage}/>
    		<Route path="detail/:articleid" component={DetailsPage}/>
    		<Route path="edt(/:articleid)" component={EditPage}/>
  		</Route>
	</Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('content')
);