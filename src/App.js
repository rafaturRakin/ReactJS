import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import React, {Component} from 'react';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>React JS</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
    );
  }
}

export default App;
