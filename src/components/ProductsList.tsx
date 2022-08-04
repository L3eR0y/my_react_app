import Product from './Product';
import { IProduct } from '../models/product.model';
import React from 'react';

interface ProductListProps {
  products: IProduct[]
}

class ProductsList extends React.Component<ProductListProps> {
  constructor(props:ProductListProps) {
    super(props)
  }

  render() {
    return (
      <div className="flex flex-col h-full max-w-4xl">
        {
          this.props.products.map((product: IProduct) => {
            return <Product key={product.id} product={product} />
          })
        }
      </div>
    )
  }
}

export default ProductsList;