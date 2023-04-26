import React from "react";
import style from "./Board.module.scss";
import { BoardItem } from "./BoardItem";

export function Board(props) {
  return <div className={style.Board}>
      <BoardItem role={{name: "backlog", header: "Backlog"}} />
      <BoardItem role={{name: "ready", header: "Ready"}} />
      <BoardItem role={{name: "in_progress", header: "In progress"}} />
      <BoardItem role={{name: "finished", header: "Finished"}} />
  </div>;
}
