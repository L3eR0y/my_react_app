import { Product } from './Product';
import { IProduct } from '../models/product.model';

interface ProductProps {
  products: IProduct[]
}

export function ProductsList({ products }: ProductProps) {
  return (
    <div className="flex flex-col w-96 py-5 px-5 h-full">
      <Product />
      <Product />
      <Product />
    </div>
  )
}