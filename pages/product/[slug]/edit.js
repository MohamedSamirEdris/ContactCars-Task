import React from 'react';
import ProductForm from '../../../components/ProductForm';
import Link from 'next/link';

export default function edit({ product }) {
  console.log("🚀 ~ file: edit.js:6 ~ edit ~ product", product)
  
  return (
    <>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <ProductForm {...product} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:8000/products/${context.params.slug}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}
