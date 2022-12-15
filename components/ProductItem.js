import React,{useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';


export default function ProductItem({ product, title }) {
 
  return (
    <>
      <Head>
        <title>{title ? title + ' - ContactCars' : 'ContactCars'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="card">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            className="rounded "
            width={200}
            height={200}
            priority
          />
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg">{product.name}</h2>
          </Link>
          <p className="mb-2">${product.price}</p>
          <div className="justify-space">
            <Link href={`/product/${product.slug}/edit`}>
              <button className="primary-button m-2" type="button">
                Edit
              </button>
            </Link>
            <button
              className="primary-button"
              type="button"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
            <button className="primary-button m-4" type="button">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
