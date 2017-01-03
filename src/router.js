import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import Container from './routes/Container';
import Home from './routes/Home';

export default function({ history }) {
  return (
    <Router history={history}>
		<Route path="/" component={Container}>
			<IndexRoute breadcrumbName="首页" component={Home} />
	    	{/*<Route path="login" breadcrumbName="登录" component={Login} />*/}
	    </Route>
	</Router>
	);
};
