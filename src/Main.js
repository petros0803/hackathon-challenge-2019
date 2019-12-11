import React from 'react'

import Admin from './Admin/Admin'
import AboutUs from './AboutUs/AboutUs'
import CazuriSociale from './CazuriSociale/CazuriSociale'
import Home from './Home/Home'
import Incidente from './Incidente/Incidente'
import Login from './Login/Login'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Main = (props) => (
    <main>
      <Router>
        <Switch>
          <Route path='/AboutUs' component = {AboutUs} />
          <Route path='/Login' component = {Login} />
          <Route path='/Register' component = {Login} />
          <Route path='/Reset' component = {Login} />
          <Route path='/CazuriSociale' component = {CazuriSociale} />
          <Route path='/Incidente' component = {Incidente} />
          <Route path='/Admin' component = {Admin} />
          <Route component={Home} />
        </Switch>
      </Router>
    </main>
  )

export default Main