import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ title, children }) {
  const route = useRouter()
  return (
    <>
      <Head>
        <title>{title ? title + ' - ContactCars' : 'ContactCars'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">mohamed samir </Link>
            <Link href="/product/add" className="p-2">
              Add Product
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>

              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">
          <div>
            <span> Filter by </span>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2' onClick={()=> route.push("?category=shirt")}>Shirts</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2' onClick={()=> route.push("?category=pants")}>Pants</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2' onClick={()=> route.push("?category=jackets")}>Jackets</button>
          </div>
          {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Mohamed Samir</p>
        </footer>
      </div>
    </>
  );
}

