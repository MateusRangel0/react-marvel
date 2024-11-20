import { MODIFIED_ORDER_OPTIONS, NAME_ORDER_OPTIONS } from "@/constants/filter.constants";
import React, { useState } from 'react';
import Select from "./forms/Select";

interface FiltersProps {
  onFilterChange: (filters: { orderBy: string[] }) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [nameOrder, setNameOrder] = useState('');
  const [modifiedOrder, setModifiedOrder] = useState('');

  const handleNameOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newNameOrder = e.target.value;
    setNameOrder(newNameOrder);
    onFilterChange({ orderBy: [newNameOrder, modifiedOrder].filter(Boolean) });
  };

  const handleModifiedOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newModifiedOrder = e.target.value;
    setModifiedOrder(newModifiedOrder);
    onFilterChange({ orderBy: [nameOrder, newModifiedOrder].filter(Boolean) });
  };

  return (
    <div className="flex items-center space-x-4">
      <Select
        id="nameOrder"
        value={nameOrder}
        onChange={handleNameOrderChange}
        options={NAME_ORDER_OPTIONS}
        className="border border-gray-300 rounded px-4 py-2"
      />
      <Select
        id="modifiedOrder"
        value={modifiedOrder}
        onChange={handleModifiedOrderChange}
        options={MODIFIED_ORDER_OPTIONS}
        className="border border-gray-300 rounded px-4 py-2"
      />
    </div>
  );
}