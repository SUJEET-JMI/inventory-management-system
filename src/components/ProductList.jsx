import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: 1,
    description: "",
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.quantity > 0) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          quantity: parseInt(newProduct.quantity),
          description: newProduct.description,
        },
      ]);
      setNewProduct({ name: "", price: "", quantity: 1, description: "" });
    }
  };

  return (
    <div className="product-listing" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h2 style={{ color: '#4CAF50', fontSize: '2rem', marginBottom: '20px' }}>Products</h2>
      <div className="add-product" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', rowGap: '15px', columnGap: '20px', marginBottom: '30px', padding: '20px', backgroundColor: '#F0F8FF', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <label htmlFor="name" style={{ fontWeight: 'bold', color: '#555' }}>Product Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
        />

        <label htmlFor="price" style={{ fontWeight: 'bold', color: '#555' }}>Product Price:</label>
        <input
          id="price"
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
        />

        <label htmlFor="quantity" style={{ fontWeight: 'bold', color: '#555' }}>Quantity:</label>
        <input
          id="quantity"
          type="number"
          placeholder="Quantity"
          value={newProduct.quantity}
          min="1"
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
        />

        <label htmlFor="description" style={{ fontWeight: 'bold', color: '#555' }}>Product Description:</label>
        <textarea
          id="description"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', resize: 'none' }}
        />

        <div></div>
        <button
          onClick={handleAddProduct}
          style={{
            gridColumn: 'span 2',
            justifySelf: 'center',
            padding: '12px 20px',
            backgroundColor: '#4CAF50',
            color: '#FFF',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#45A049')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Add Product
        </button>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
