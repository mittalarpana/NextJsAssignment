export const fetchProducts = async () => {
    const res = await fetch('http://localhost:3001/products');
    return res.json();
  };
  
  export const fetchProductById = async (id) => {
    const res = await fetch(`http://localhost:3001/products/${id}`);
    return res.json();
  };