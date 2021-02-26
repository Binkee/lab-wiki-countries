
import './App.css';
import CountriesList from './Components/CountriesList'

import Nav from './Components/Nav'
import countries from './countries.json';
import {Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'


export default class App extends Component {
  state = {
    countries: countries
  }

  render() {
    const {countries} = this.state
    return (
      <div>
      <Nav/>
      <Switch>
        <CountriesList countries={countries}/>
        </Switch>
      </div>
    )
  }
}
