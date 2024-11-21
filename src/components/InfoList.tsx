import React, { useState } from 'react';

interface InfoListProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function InfoList<T>({ title, items, renderItem }: InfoListProps<T>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <button onClick={toggleCollapse} className="text-gray-500 hover:text-red-500">
          {isCollapsed ? 'Open' : 'Close'}
        </button>
      </div>
      <div className={isCollapsed ? 'hidden' : 'flex-1'}>
        <ul className="list-none pl-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center border-b border-gray-100 py-2">
              <span className="mr-2 text-gray-600 font-medium">{renderItem(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}