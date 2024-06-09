import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../Components/ProductTile/Index';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);

    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-200 bg-opacity-75">
          <Circles
            height={'120px'}
            width={'120px'}
            color="rgb( 127,29,29 ) visible={true}"
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
