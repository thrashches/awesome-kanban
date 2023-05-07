import React, { useState } from "react";
import style from "./Board.module.scss";
import { BoardItem } from "./BoardItem";

export function Board(props) {
  const [data, setData] = useState({
    backlog: {
      issues: [
        {
          id: "12345",
          name: "Sprint bugfix",
          description: "Fix all the bugs",
        },
      ],
    },
    ready: {
      issues: [
        {
          id: "1",
          name: "Main page – performance issues",
          description: "Fix all the bugs",
        },
        {
          id: "12345",
          name: "Sprint bugfix",
          description: "Fix all the bugs",
        },
        {
          id: "12345",
          name: "Sprint bugfix",
          description: "Fix all the bugs",
        },
      ],
    },
    in_progress: {
      issues: [],
    },
    finished: {
      issues: [],
    },
  });

  const [backlogEdit, setBacklogEdit] = useState(false);

  const handleBacklogAddClick = () => {
    setBacklogEdit(true);
  };

  return (
    <div className={style.Board}>
      <BoardItem
        role={{ name: "backlog", header: "Backlog" }}
        issues={data.backlog.issues}
        handleAddClick={handleBacklogAddClick}
        edit={backlogEdit}
      />
      <BoardItem
        role={{ name: "ready", header: "Ready" }}
        issues={data.ready.issues}
      />
      <BoardItem
        role={{ name: "in_progress", header: "In progress" }}
        issues={data.in_progress.issues}
      />
      <BoardItem
        role={{ name: "finished", header: "Finished" }}
        issues={data.finished.issues}
      />
    </div>
  );
}
