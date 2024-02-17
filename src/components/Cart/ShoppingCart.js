// ShoppingCart.js
import React from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>Cart</Typography>
      <List>
        {cart.map(product => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Button variant="contained" onClick={() => removeFromCart(product)}>Remove from Cart</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ShoppingCart;
