import React from 'react';
import { IProduct } from '../models/product.model';
import Counter from './Counter';


interface ProductProps {
  product: IProduct
}

class Product extends React.Component<ProductProps> {
  constructor(props:ProductProps){
    super(props)
  }

  render() {
    const product = this.props.product
    return (
    <div className="border min-h-50 relative my-1 py-6 px-4 rounded-xl flex flex-col items-center align-center justify-center">
        <Counter />
        <img className='w-1/4 py-2' src={product.image} alt={product.title}/>
        <div className='w-full flex py-2 px-6 border rounded-xl'>
          <div className='flex grow justify-center'>
            <p>{product.title}</p>
          </div>
          <div className='flex-none justify-center font-bold'>
            <p>{product.price} руб.</p>
          </div>
        </div>
    </div>
    )
  }
}

export default Product;