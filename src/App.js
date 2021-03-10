import React, {Suspense} from 'react';
import { Link, Route } from "wouter"
import {GifsContextProvider} from './context/GifsContext'
import {UserContextProvider} from './context/UserContext'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Header from './components/Header'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register';

import './App.css'


const HomePage = React.lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
          <Header/>
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={HomePage}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword/:rating?"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={Login}
              path="/login"
            />
            <Route
              component={Register}
              path="/Register"
            />
          </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </UserContextProvider>
  )
}
