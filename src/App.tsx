import React, {useState} from 'react';
import OrderDetails, {OrderItem} from './components/OrderDetails/OrderDetails';
import AddItems, {MenuItem} from './components/AddItems/AddItems';
import './App.css';

const menuItems: MenuItem[] = [
  {name: 'Hamburger', price: 80},
  {name: 'Cheeseburger', price: 90},
  {name: 'Fries', price: 45},
  {name: 'Coffee', price: 70},
  {name: 'Tea', price: 50},
  {name: 'Cola', price: 40},
];

const App: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addItemToOrder = (item: MenuItem): void => {
    const existingItem = orderItems.find((orderItem) => orderItem.name === item.name);

    if (existingItem) {
      const updatedOrderItems = orderItems.map((orderItem) =>
        orderItem.name === item.name ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem
      );
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, {...item, quantity: 1}]);
    }
  };

  return (
    <div className="app">
      <OrderDetails orderItems={orderItems}/>
      <AddItems menuItems={menuItems} onAddItem={addItemToOrder}/>
    </div>
  );
};

export default App;
