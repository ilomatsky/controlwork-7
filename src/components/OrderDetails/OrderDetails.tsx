import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

interface OrderItem extends MenuItem {
  quantity: number;
}


interface OrderDetailsProps {
  orderItems: OrderItem[];
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
