import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import CountryDetails from './CountryDetails'

export default class CountriesList extends Component {
    render() {
        return (
            <div>{
                this.props.countries.map((country, index)=>{
                    return (
                        <div>
                            <Link key={index.cca3} to ={`/${index.cca3}`}>{country.name.common}</Link> 
                        </div>
                    )
                })
                }
                <div class="col">
                    <Route path="/country/:country.cca3" component={CountryDetails}/>
                </div>
            </div>
        )
    }
}
