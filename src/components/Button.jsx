import React, { useEffect, useRef } from "react";

const Button = ({ onClick, label }) => {
  const rerender = useRef(0);
  useEffect(() => console.log("rendered" + " " + rerender.current++));

  return <button onClick={onClick}>{label}</button>;
};

export default Button;
