import React, { useState } from "react";
import "./SearchBar.css";

const products = [
  "tooth brush",
  "tooth paste",
  "mouth wash",
  "dental floss",
  "mouth guard",
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(" ");

  const handleInputChange = (event) => {
    // setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    // setSearchValue("");
  };

  // console.log(
  //   producst.map((products) => {
  //     return product.toLocaleUpperCase();
  //   })
  // );

  const shouldDisplayButton = searchValue.length > 0;

  const filterProducts = products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <br />
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
      <ul>
        {filterProducts.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
