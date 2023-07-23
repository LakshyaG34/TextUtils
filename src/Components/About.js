import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <div>
      <div class="accordion" id="accordionExample" style={myStyle}>
        
      </div>
      
    </div>
  );
}
