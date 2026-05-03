import { ProductCard, type Product } from '../productCard/productCard';
import type { Currency } from '../currency';

type ProductListProps = {
  products: Product[]
  currency: Currency;
};

export const ProductList = ({ products, currency }: ProductListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          currency={currency}
          href={`/product/${product.id}`}
        />
      ))}
    </div>
  );
};
