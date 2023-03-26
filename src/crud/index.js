import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'

export default class Crud extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <div className='container' mt-4>
            <h2>CRUD REACTJS</h2>
        </div>
      </div>
    )
  }
}
