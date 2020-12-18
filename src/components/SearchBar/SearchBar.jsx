import { Component } from 'react';
import propTypes from 'prop-types';
import QuantityPerPage from '../QuantityPerPage/QuantityPerPage';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = e => this.setState({ query: e.currentTarget.value });

  handleSubmitForm = e => {
    e.preventDefault();
    const { query } = this.state;
    if (!query) return;
    this.props.onSubmitForm(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={e => this.handleSubmitForm(e)}>
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
            onChange={e => this.handleChangeQuery(e)}
          />
        </form>
        <QuantityPerPage onChange={this.props.onChangeQuantity} />
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmitForm: propTypes.func.isRequired,
  onChangeQuantity: propTypes.func.isRequired,
};
