import React, {Component} from 'react';
import {Navbar,NavbarBrand,} from 'reactstrap';
import {DISHES} from './shared/dishes';
import Menu from './components/Menu'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }
  render(){
    return(
      <div>
        <Navbar dark color="secondary">
          <div className ="container">
            <NavbarBrand>[P|B]</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    )
  } 
}

export default App;
