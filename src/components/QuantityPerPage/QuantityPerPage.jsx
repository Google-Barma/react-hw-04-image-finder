import { Component } from 'react';
import propTypes from 'prop-types';

export default class QuantityPerPage extends Component {
  state = {
    value: 8,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;

    if (prevState.value !== value) {
      this.props.onChange(value);
    }
  }

  onChangeValue = e => {
    const value = e.target.value;
    this.setState({ value: value });
  };

  render() {
    return (
      <select
        className="QuantitySelect"
        value={this.state.value}
        name="quantity"
        id="quantity"
        onChange={e => this.onChangeValue(e)}
      >
        <option value="4" name="quantity">
          4
        </option>
        <option value="8" name="quantity">
          8
        </option>
        <option value="12" name="quantity">
          12
        </option>
        <option value="20" name="quantity">
          20
        </option>
      </select>
    );
  }
}

QuantityPerPage.propTypes = {
  onChange: propTypes.func.isRequired,
};
