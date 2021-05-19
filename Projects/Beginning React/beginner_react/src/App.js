import React, { Component } from 'react';
import Products from './Products' ;
import {Button} from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {

  formatName (user) {
    return user.firstName + ' ' + user.LastName;
  }

    render() {
      const isValid = true;
      const products = ["Learning React", "Pro React", "Beginning React"];
      const listProducts = products.map((product) =>
      <li key={product.toString()}>{product}</li>
      );

      return (
        <div>
          <Products />
          <ul>{listProducts}</ul>
          <Button variant="primary" disabled={isValid}>Default</Button>
          <Rating rating="1"/>
          <Rating rating="2"/>
          <Rating rating="3"/>
          <Rating rating="4"/>
          <Rating rating="5"/>
        </div>
      );
  }
}

export default App;
