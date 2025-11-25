import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Search articles..." }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Real-time search (debounced could be added for performance)
    if (value.length === 0 || value.length >= 2) {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-10 pr-4 py-3 text-lg border-2 focus:border-apg-red focus:ring-apg-red/20"
        />
      </div>
      <Button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-apg-red hover:bg-[#C62828]"
      >
        Search
      </Button>
    </form>
  );
}
