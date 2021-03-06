import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function GuestBtn(props) {
  return (
    <span className="guest-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default GuestBtn;
