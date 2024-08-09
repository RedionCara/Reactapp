import React, { useState } from "react";
import "../../styles/global.css";
import "./countButton.css";

const CountButton = ({ incrementBy, buttonColor }) => {
  console.log(incrementBy);
  const [currentCount, setCurrentCount] = useState(0);
  // let [visibility, setVisibility] = useState(false);
  // let [text, setText] = useState("");

  const handleClick = () => {
    setCurrentCount(currentCount + incrementBy);
  };

  // const tapClick = () => {
  //   setCurrentCount(currentCount - decrementBy);
  // };

  // const showSquare = () => {
  //   setVisibility(!visibility);
  // };
  console.log("component re-rendered");

  // const handleInput = (e) => {
  //   setText(e.target.value);
  // };

  const buttonStyles = {
    background: buttonColor,
  };

  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>
        +{incrementBy}
      </button>
      <div className={"count-display"}>{currentCount}</div>
      {/* <button onClick={tapClick}>-{decrementBy}</button>
      <div>{currentCount}</div> */}
    </div>
    /* /* <input type="text" onChange={handleInput} />
    //   <h1>{text}</h1> */
    //   /* /* <button */
    //     * className="red"
    //     onClick={showSquare}
    //     style={{
    //       backgroundColor: visibility ? "red" : "blue",
    //       marginLeft: visibility ? "400px" : "0",
    //       transition: "ease-in .3s",
    //     }}
    //   >
    //     Click
    //   </button>
    //   visibility && (
    //     <div
    //       style={{ width: "200px", height: "200px", backgroundColor: "red" }}
    //     ></div> */

    //   !visibility && <div> not found </div>
    // // </div> */  */
    // );
  );
};
export default CountButton;
