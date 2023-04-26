import React from "react";
import style from "./Board.module.scss";

export function BoardItem(props) {
  const { role } = props;

  return (
    <div className={style.BoardItem}>
      <div className={style.BoardItem__header}>
        <h6>{role.header}</h6>
      </div>
    </div>
  );
}
