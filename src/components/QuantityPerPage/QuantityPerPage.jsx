import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

export default function QuantityPerPage({ onChange }) {
  const [value, setValue] = useState(8);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <select
      className="QuantitySelect"
      value={value}
      name="quantity"
      id="quantity"
      onChange={e => setValue(e.target.value)}
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

QuantityPerPage.propTypes = {
  onChange: propTypes.func.isRequired,
};
