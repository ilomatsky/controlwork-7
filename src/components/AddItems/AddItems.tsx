import React, {ReactNode} from 'react';

export interface MenuItem {
  quantity: ReactNode;
  name: string;
  price: number;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

interface AddItemsProps {
  menuItems: MenuItem[];
  onAddItem: (item: MenuItem) => void;
}

const AddItems: React.FC<AddItemsProps> = ({menuItems, onAddItem}) => {
  return (
    <div className="add-items">
      <h2>Add items</h2>
      {menuItems.map((item, index) => (
        <button key={index} onClick={() => onAddItem(item)}>
          {item.name} - {item.price}$
        </button>
      ))}
    </div>
  );
};

export default AddItems;
