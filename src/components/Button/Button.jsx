import propTypes from 'prop-types';

export default function Button({ onLoadMore }) {
  return (
    <button className="Button" type="button" onClick={() => onLoadMore()}>
      load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: propTypes.func,
};
