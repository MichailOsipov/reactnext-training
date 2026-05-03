import Link from 'next/link';
import type { Currency } from '../currency';

export type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
  href: string;
  currency: Currency;
};

export const ProductCard = ({
  product,
  href,
  currency,
}: ProductCardProps) => {
  return (
    <Link href={href} className="border-1 rounded-md p-2 h-full">
      Картинка тут
      <span className="block">{product.name}</span>
      <span className="block">{product.price} {currency}</span>
    </Link>
  );
};
