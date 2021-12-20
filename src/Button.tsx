import React from "react";
import "./styles.css";
interface ButtonProps {
  text: string;
  onClick: () => any;
}

var Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
export default Button;
