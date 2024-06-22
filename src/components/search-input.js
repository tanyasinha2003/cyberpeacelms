import PropTypes from "prop-types";
import "./search-input.css";

const SearchInput = ({ className = "" }) => {
  return (
    <div className={`search-input ${className}`}>
      <div className="search-input-child" />
      <img className="search-icon" alt="" src="/search@2x.png" />
      <div className="search-label">
        <a className="search">Search</a>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
};

export default SearchInput;
