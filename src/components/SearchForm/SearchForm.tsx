import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';

import s from './SearchForm.module.css';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <form className={s.searchForm} onSubmit={handleSearchSubmit}>
      <input
        className={s.searchFormInput}
        type="text"
        autoComplete="on"
        name="query"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleSearchChange}
      />
      <button type="submit" className={s.searchFormButton}>
        <FcSearch style={{ width: 30, height: 30 }} />
      </button>
    </form>
  );
};
