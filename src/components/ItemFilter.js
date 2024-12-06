const ProductFilter = ({ category, setCategory }) => (
  <div>
    {['All', 'Electronics', 'Clothing', 'Groceries'].map(cat => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default ProductFilter;