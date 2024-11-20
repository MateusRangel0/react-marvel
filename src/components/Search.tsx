import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";

interface SearchProps {
  onSearch: (query: string) => void;
  placeHolder?: string;
  className?: string;
}

export default function Search({ onSearch, placeHolder, className }: SearchProps) {
  const [query, setQuery] = useState('');
  const defaultClassName = twMerge('border border-gray-300 rounded px-4 py-2 w-full', className);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeHolder || 'Search...'}
        className={defaultClassName}
      />
    </div>
  );
}