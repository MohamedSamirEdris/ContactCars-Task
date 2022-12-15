import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

export default function Home({ products }) {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => [
          <ProductItem product={product} key={product.slug} />,
        ])}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { category , price} = query;
  let url = 'http://localhost:8000/products';
  category ? (url += `?category=${category}`) : null;
  price ? (url += `?_sort=${price}`) : null ;

  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}
