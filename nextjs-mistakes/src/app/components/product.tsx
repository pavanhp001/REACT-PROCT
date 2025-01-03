import React from 'react'

export default async function Product() { // here we dont have any hooks and async function so its SSR component
  const res = await fetch("https://fakestoreapi.com/products/3");
  const product = await res.json();
  return (
    <section className='flex flex-col item-center gap-2'>
        <p>{product.title}</p>
    </section>
  );
}
