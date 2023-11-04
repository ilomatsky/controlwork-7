import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

interface AddItemsProps {
  menuItems: MenuItem[];
  onAddItem: (item: MenuItem) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ menuItems, onAddItem }) => {
  return (
    <div className="add-items">
      <h2>Add items</h2>
      {menuItems.map((item) => (
        <button key={item.id} onClick={() => onAddItem(item)}>
          {item.name} - {item.price}$
        </button>
      ))}
    </div>
  );
};

export default AddItems;
