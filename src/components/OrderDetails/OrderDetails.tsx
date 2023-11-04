import React from 'react';
import {OrderItem as OrderItemInterface} from '../AddItems/AddItems';

interface OrderDetailsProps {
  orderItems: OrderItemInterface[];
  onRemoveItem: (name: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({orderItems, onRemoveItem}) => {
  const calculateItemTotal = (item: OrderItemInterface): number => {
    return item.price * item.quantity;
  };

  const total = orderItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  return (
    <div className="OrderDetails">
      <h2>Order Details</h2>
      {orderItems.length === 0 ? (
        <><p>Order is empty!</p><p>Please add some items!</p></>
      ) : (
        <div>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                {item.name} x{item.quantity} - {calculateItemTotal(item)}$
                <button onClick={() => onRemoveItem(item.name)}>x</button>
              </li>
            ))}
          </ul>
          <div className="TotalSum">
            <strong>Total: {total}$</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
