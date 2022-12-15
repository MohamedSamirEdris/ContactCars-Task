import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';


export default function Home({ products }) {
  // const [products, setProduct] = useState([]);

  // async function fetchProduct() {
  //   try {
  //     const resposnse = await fetch('http://localhost:8000/products');
  //     const data = await resposnse.json();
  //     console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

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

export async function getServerSideProps({query}) {
  const {category} = query
  let url = 'http://localhost:8000/products';
  category ? url+= `?category=${category}`: null;
  
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}


