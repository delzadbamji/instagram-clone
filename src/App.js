import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(()=> import ('./pages/login'));
const Error404 = lazy(()=> import ('./pages/error404'));

function App() {
	return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
        {/* <Route path={ROUTES.NOT_FOUND} component={Error404}/> */}
      </Switch>
      </Suspense> 
    </Router>
  )
}

export default App;
