import React from 'react';

interface InfoListProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function InfoList<T>({ title, items, renderItem }: InfoListProps<T>) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="list-inside list-disc">
        {items.map((item, index) => (
          <li key={index}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}