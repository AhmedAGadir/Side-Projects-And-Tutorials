import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import BasketCheckout from './Components/BasketCheckout/BasketCheckout';
import Button from './Components/UI/Button/Button';
import './App.css'

const PRODUCT_DATA = {
  products:
    [
      {
        name: "Product One",
        price: 5
      },
      {
        name: "Product Two",
        price: 8
      },
      {
        name: "Product Three",
        price: 12
      },
      {
        name: "Product Four",
        price: 3
      },
      {
        name:"Product Five",
        price: 20
      }
    ]
}


class App extends Component {
  state = {
      data: null,
  } 

  componentDidMount() {
    // fetch request was not working

    // fetch('../../product_data.json', {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    //  })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    // if the fetch request would work, I would do the following with the response
    let data = PRODUCT_DATA.products.map(product => {
        let p = {...product}
        p.basket = 0;
        return p
    })
    this.setState({data})
  }

  addToBasketHandler = ind => {
    if (this.state.data[ind].basket === 10) return;
    let data = [...this.state.data];
    data[ind].basket += 1; 
    this.setState({data})
  }

  removeFromBasketHandler = name => {
    let data = [...this.state.data];
    let ind = data.findIndex(d => d.name === name)
    console.log(ind)
    data[ind].basket = 0;
    this.setState({data})
  }

  render() {

    if (!this.state.data) return <h1>...Loading</h1>
    const basketNumber = this.state.data.map(prod => prod.basket).reduce((a,b) => a + b);

    return (
        <BrowserRouter>
            <Fragment>
                
                <header>

                  <Route path="/checkout" render={() => (
                    <Link to='/'>
                      <Button classes={["purple"]}>
                          Continue shopping
                      </Button>
                    </Link>
                  )} />

                  <Link to='/checkout'>
                      <Button classes={["checkout","purple"]}>
                          Checkout: <span>{basketNumber}</span>
                      </Button>
                  </Link>

                </header>
                <main>
          
                <Route path="/" exact render={() => (
                  <ProductList 
                    data={this.state.data}
                    addToBasket={this.addToBasketHandler}/>
                )} />
          
                <Route path="/checkout" render={() => (
                  <BasketCheckout 
                    data={this.state.data}
                    removeFromBasket={this.removeFromBasketHandler}/>
                )} />

                </main>
            </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
