import React from 'react'
import ProductForm from '../../components/ProductForm'
import Link from 'next/link';

export default function AddProduct() {
  return (
    <>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <ProductForm/>
    </>
   
  )
}



