import { Currency } from '../components/currency';
import { ProductList } from '../components/productList/productList';
import { PRODUCTS_ITEMS } from '../components/products-items';

export default function Home() {
  return (
    <ProductList products={PRODUCTS_ITEMS} currency={Currency.RUB} />
  );
}
