import React from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductPage({product}) {
  // const { query } = useRouter();
  // const { slug } = query;
  // const product = data.products.find((x) => {
  //   return x.slug === slug;
  // });
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            priority
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>

            <li>{product.decs}</li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 felx justify-between">
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:8000/products/${context.params.slug}`);
  const data = await res.json();
  console.log("🚀 ~ file: [slug].js:58 ~ getServerSideProps ~ data", data)
  return {
    props: {
      product: data,
    },
  };
}