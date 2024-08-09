import React from "react";
import SearchBar from "./components/SearchBarr/SearchBar";
import CountButton from "./components/CountButton/CountButton";

const App = () => {
  return (
    <div>
      <div className="first">
        <CountButton incrementBy={6} buttonColor={"blue"} />
        <CountButton incrementBy={800} buttonColor={"red"} />
        <CountButton incrementBy={5} buttonColor={"green"} />
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
