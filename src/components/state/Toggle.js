import React, { useState } from "react";
import "./ToggleStyle.css";

// stateless functional component: component nhưng không sử dụng state

// function Toggle (){
//     return <div className="toggle"></div>
// }
// // stateful functional component: component  có sử dụng state

// function Toggle2(){
//     return <div className="toggle"></div>
// }

function Toggle() {
  //1. enabling state : useState(initialize value)
  //2. initialize state: useState(false)
  //3. reading state
  //4. update state
  // initialize state: boolean(true, false), number, string("sdsadasd"), undefinded, null, {title: "asdsdadasd"}
  const [on , setOn] = useState(false);

  console.log(on);

  const handleToggle = () => {
    setOn((on) => !on);
  }
  return( 
  <div>
  <div className={`toggle ${on ? "active" : ""}`} onClick = {handleToggle}>
      <div className={`spinner ${on ? "active" : ""}`}></div>
  </div>
  
  
  </div>
  );

}

export default Toggle;
