import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, placehoder, onChangeHandler }) => {
  return (
    <div>
      <input
        className={className}
        placeholder={placehoder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
