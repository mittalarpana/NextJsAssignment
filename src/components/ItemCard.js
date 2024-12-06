import Link from 'next/link';

const ProductCard = ({ product }) => (
  <div>
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    <p>{product.category}</p>
    <Link href={`/products/${product.id}`}>
      <button>View Details</button>
    </Link>
  </div>
);

export default ProductCard;