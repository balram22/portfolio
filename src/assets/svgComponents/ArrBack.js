import * as React from "react";

const SvgArrBack = (props) => (
  <svg
  viewBox="0 0 50 50"
    fill={props.color ? props.color :"currentColor"}
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    width={48}
    {...props}
  >
    <path d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z" />
  </svg>
);

export default SvgArrBack;
