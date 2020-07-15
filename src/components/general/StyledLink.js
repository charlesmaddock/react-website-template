import React from "react";
// Custom

export default (props) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: 15,
      fontWeight: 500,
      textDecoration: "none",
      ...props.style,
    }}
  >
    {props.children}
  </a>
);
