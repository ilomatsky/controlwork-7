import React from 'react';
import {MenuItem as OrderItemInterface, MenuItem} from '../AddItems/AddItems';

export interface OrderItem extends MenuItem {
  quantity: number;
}

interface OrderDetailsProps {
  orderItems: OrderItemInterface[];
}

const OrderDetails: React.FC<OrderDetailsProps> = ({orderItems}) => {
  return (
    <div className="order-details">
      <h2>Order Details</h2>
      {orderItems.length === 0 ? (
        <p>No items in the order.</p>
      ) : (
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.name} x{item.quantity} - {item.price}$
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderDetails;
