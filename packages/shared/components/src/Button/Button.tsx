import "./Button.scss";
import React from "react";

interface Props {
  text: string;
  color?: string;
}

export const Button = (props: Props) => {
  return <button>{props.text}</button>;
};

export default Button;
