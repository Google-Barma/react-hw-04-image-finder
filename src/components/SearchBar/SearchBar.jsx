import { useState } from 'react';
import propTypes from 'prop-types';
import QuantityPerPage from '../QuantityPerPage/QuantityPerPage';

export default function SearchBar({ onChangeQuantity, onSubmitForm }) {
  const [query, setQuery] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();

    if (!query) return;
    onSubmitForm(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => handleSubmitForm(e)}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.target.value)}
        />
      </form>
      <QuantityPerPage onChange={onChangeQuantity} />
    </header>
  );
}

SearchBar.propTypes = {
  onSubmitForm: propTypes.func.isRequired,
  onChangeQuantity: propTypes.func.isRequired,
};
