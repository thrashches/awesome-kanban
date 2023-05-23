import React from "react";
import style from "./Buttons.module.scss";
import { ReactComponent as AddIcon } from "./Add.svg";

export const AddButton = (props) => {
  const { onClick } = props;

  return (
    <button className={style.AddButton} onClick={onClick}>
      <AddIcon /> Add card
    </button>
  );
};

export const SubmitButton = (props) => {
  const {handleClick} = props;
  return <button className={style.SubmitButton} onClick={handleClick}>Submit</button>;
}
