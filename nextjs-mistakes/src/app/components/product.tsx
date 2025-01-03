// "use server"; If we manually give use server it will give Cannot update a component (`Router`) while rendering a different component (`default`). To locate the bad setState() call inside `default`, follow the stack trace as described in 
// and it will behaves un expacted things in the console
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
