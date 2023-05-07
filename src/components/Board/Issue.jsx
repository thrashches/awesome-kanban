import React from "react";
import style from "./Board.module.scss";


export function Issue(props) {
  const {issue} = props;
  return <div className={style.Issue}>
    {issue.name}
  </div>
}