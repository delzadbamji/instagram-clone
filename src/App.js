import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import ProtectedRoute from './helpers/protected-route';

const Login = lazy(()=> import ('./pages/login'));
const SignUp = lazy(()=> import ('./pages/signup'));
const Error404 = lazy(()=> import ('./pages/error404'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));

function App() {
  const { user } = useAuthListener();
	return (
    <UserContext.Provider value={{ user }}>
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={SignUp}/>
        <Route path={ROUTES.PROFILE} component={Profile} />
        <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
          <Dashboard />
        </ProtectedRoute>
        <Route path={ROUTES.NOT_FOUND} component={Error404}/>
      </Switch>
      </Suspense> 
    </Router>
    </UserContext.Provider>
  )
}

export default App;
