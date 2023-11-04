import React, {useState} from 'react';
import OrderDetails from './components/OrderDetails/OrderDetails';
import AddItems, {MenuItem, OrderItem} from './components/AddItems/AddItems';
import './App.css';

const menuItems: MenuItem[] = [
  {name: 'Hamburger', price: 80, quantity: 0},
  {name: 'Cheeseburger', price: 90, quantity: 0},
  {name: 'Fries', price: 45, quantity: 0},
  {name: 'Coffee', price: 70, quantity: 0},
  {name: 'Tea', price: 50, quantity: 0},
  {name: 'Cola', price: 40, quantity: 0},
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

  const removeItemFromOrder = (name: string): void => {
    const updatedOrderItems = orderItems.filter((item) => item.name !== name);
    setOrderItems(updatedOrderItems);
  };

  return (
    <div className="app">
      <OrderDetails orderItems={orderItems} onRemoveItem={removeItemFromOrder}/>
      <AddItems menuItems={menuItems} onAddItem={addItemToOrder}/>
    </div>
  );
};

export default App;
