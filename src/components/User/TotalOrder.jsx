import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SHIPPING_COST } from '../../utils';

export default function TotalOrder({ productIds }) {
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    // Función para obtener el precio de un producto por su ID
    const fetchProductPrice = async (productId) => {
      const url = `https://jsx-store-api.onrender.com/product/${productId}`;
      try {
        const response = await axios.get(url);
        return response.data.price || 0;
      } catch (error) {
        console.error('Error:', error);
        return 0;
      }
    };

    const calculateTotalPrice = async () => {
      const prices = await Promise.all(
        productIds.map((productId) => fetchProductPrice(productId))
      );
      const total = prices.reduce((acc, price) => acc + price, 0);
      setTotalPrice(total + SHIPPING_COST);
    };

    calculateTotalPrice();
  }, [productIds]);

  if (totalPrice === null) {
    return null;
  }

  const subtotal = totalPrice - SHIPPING_COST;

  return (
    <div style={{ lineHeight: '0.75rem', padding: '1rem 0px' }}>
      <p style={{ color: 'grey' }}>Costo de envío: ${SHIPPING_COST}</p>
      <p style={{ color: 'grey' }}>Subtotal: ${subtotal}</p>
      <p style={{ fontWeight: '600' }}>Total: ${totalPrice}</p>
    </div>
  );
}
