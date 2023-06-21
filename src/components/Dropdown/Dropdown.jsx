import React from "react";
import style from "./Dropdown.module.scss";

export function Dropdown (props) {
  const {items} = props;

  return <div className={style.Dropdown}>
    {items?items.map()}
  </div>
}