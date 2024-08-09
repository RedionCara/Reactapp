import React from "react";
import SearchBar from "./components/SearchBarr/SearchBar";
import CountButton from "./components/CountButton/CountButton";

const App = () => {
  return (
    <div>
      <div className="first">
        <CountButton incrementBy={6} />
        <CountButton incrementBy={800} />
        <CountButton incrementBy={5} />
      </div>
      <br></br>
      <div className="second">
        <SearchBar />
      </div>
    </div>
  );
};
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

export default App;
