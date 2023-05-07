import React from "react";
import style from "./Board.module.scss";
import { SubmitButton } from "../Buttons/Buttons";

export function NewIssue(props) {
  return <div className={style.BoardItem}>
    <input></input>
    <SubmitButton />
  </div>;
}
