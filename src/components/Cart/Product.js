// Products.js
import React from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const Products = ({ products, addToCart }) => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>Products</Typography>
      <List>
        {products.map(product => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Button variant="contained" onClick={() => addToCart(product)}>Add to Cart</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Products;
