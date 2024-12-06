import { useState, useEffect } from 'react';
import { fetchProducts } from '../lib/api';
import ItemCard from '../components/ItemCard';
import ItemFilter from '../components/ItemFilter';

const HomePage = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  }, [category, products]);

  return (
    <div className="container">
      <h1>Item List</h1>
      <ItemFilter category={category} setCategory={setCategory} />
      <div>
        {filteredProducts.map(product => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60
  };
}

export default HomePage;