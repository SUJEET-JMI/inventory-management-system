import React from "react";

const Product = ({ product, addToCart }) => {
  // Calculate total price
  const totalPrice = (product.price * product.quantity).toFixed(2);

  return (
    <div
      className="product"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid #4CAF50',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#FAFAFA',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '12px' }}>{product.name}</h3>
        <div
          className="product-details"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            rowGap: '10px',
            fontSize: '1rem',
            alignItems: 'center'
          }}
        >
          <label style={{ fontWeight: 'bold', color: '#555' }}>Price:</label>
          <p style={{ color: '#007BFF', fontWeight: 'bold', margin: 0 }}>${product.price.toFixed(2)}</p>

          <label style={{ fontWeight: 'bold', color: '#555' }}>Quantity:</label>
          <p style={{ color: '#007BFF', fontWeight: 'bold', margin: 0 }}>{product.quantity}</p>

          <label style={{ fontWeight: 'bold', color: '#555' }}>Total Cost:</label>
          <p style={{ color: '#D32F2F', fontWeight: 'bold', margin: 0 }}>${totalPrice}</p>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        {/* Pass total price when adding to cart */}
        <button
          onClick={() => addToCart({ ...product, totalPrice: parseFloat(totalPrice) })}
          style={{
            padding: '12px 20px',
            backgroundColor: '#FF5722',
            color: '#FFF',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'transform 0.2s, background-color 0.3s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#E64A19';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FF5722';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
