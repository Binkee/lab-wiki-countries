import React, { Component } from 'react'

export default class CountryDetails extends Component {
   state = {
       country : {}
   }

   getCountry = (()=>{
    fetch("../countries.json")
   })
   
    render() {
        return (
            <div>
                <h1>hey</h1>
            </div>
        )
    }
}
