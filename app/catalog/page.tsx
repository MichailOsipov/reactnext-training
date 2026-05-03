'use client'

import { useSearchParams } from 'next/navigation';

export default function Catalog() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  return (
    <div>Каталог: {search} </div>
  );
}
