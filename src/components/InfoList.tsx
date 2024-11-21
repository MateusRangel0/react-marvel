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
    <div className="flex flex-col rounded-lg bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <button onClick={toggleCollapse} className="text-gray-500 hover:text-red-500">
          {isCollapsed ? 'Open' : 'Close'}
        </button>
      </div>
      <div className={isCollapsed ? 'hidden' : 'flex-1'}>
        <ul className="list-none space-y-2 pl-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center border-b border-gray-100 py-2">
              <span className="mr-2 font-medium text-gray-600">{renderItem(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}