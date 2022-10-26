import style from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <button
      className={style.button}
      type={props.type || "button"}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
