import React from 'react';
import ProductsList from '../components/ProductsList';
import { IProduct } from '../models/product.model';

class Store extends React.Component {
  state = {
    products: []
  }
  constructor(props?:any) {
    super(props || {})
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((response)=>{return response.json()})
      .then((data)=>{
        this.setState({
          products: [...data]
        })
      })
  }

  render() {
    return (
      <ProductsList products={this.state.products}/>
    )
  }
}

export default Store;