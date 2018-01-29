import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/Login'
import DashboardPage from '../containers/Dashboard'
import PageNotFound from '../containers/PageNotFound'

export const RouteMap = () => (
	<div>
		<Switch>
			<Route path="/" exact component={DashboardPage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/dashboard" component={DashboardPage} />
			<Route component={PageNotFound} />
		</Switch>
	</div>
);