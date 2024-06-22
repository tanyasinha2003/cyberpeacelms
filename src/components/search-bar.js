import SearchInput from "./search-input";
import PropTypes from "prop-types";
import "./search-bar.css";

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`search-bar ${className}`}>
      <SearchInput />
      <div className="user-menu">
        <div className="user-profile">
          <img
            className="doorbell-icon1"
            loading="lazy"
            alt=""
            src="/doorbell@2x.png"
          />
          <img
            className="male-user-icon1"
            loading="lazy"
            alt=""
            src="/male-user@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
