import { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import AppContentWrapper from './components/appContentWrapper'

import paths from './paths'

import './App.css';

const Home = lazy(() => import('./components/home')) 
const Dashboard = lazy(() => import('./components/dashboard'));

const Loading = () => <LoadingWrap><h3>Page is Loading. Relax, have a cookie 🍪</h3></LoadingWrap>

const App = () => (
  <Router>
    <Suspense fallback={Loading()}>
      <AppContentWrapper>
        <Switch>
          <Route exact path={paths.root}>
            <Home />
          </Route>

          <Route path={paths.dashboard}>
            <Dashboard />
          </Route>
        </Switch>
      </AppContentWrapper>
    </Suspense>
  </Router>
)

export default App;

const LoadingWrap = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;
  text-align: center;
`
