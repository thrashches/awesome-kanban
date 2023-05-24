import React, { useState } from "react";
import style from "./Board.module.scss";
import { BoardItem } from "./BoardItem";

export function Board(props) {
  const [data, setData] = useState([
    {
      id: 12345,
      name: "Sprint bugfix",
      description: "Fix all the bugs",
      status: "backlog",
    },
    {
      id: 1,
      name: "Main page – performance issues",
      description: "Fix all the bugs",
      status: "ready",
    },
    {
      id: 1234,
      name: "Sprint bugfix",
      description: "Fix all the bugs",
      status: "ready",
    },
    {
      id: 12346,
      name: "Sprint bugfix",
      description: "Fix all the bugs",
      status: "ready",
    },
  ]);

  const [backlogEdit, setBacklogEdit] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(null);

  const handleBacklogAddClick = () => {
    setBacklogEdit(true);
  };

  const handleAddClick = (board) => {
    if (board !== 'backlog') {
      setDropdownShow(board);
    }
  }

  const handleSubmitClick = (name) => {
    if (name.length) {
      const newIssue = {
        id: Math.max(...data.map((item) => item.id)) + 1,
        name: name,
        description: "",
        status: "backlog",
      };
      setData([...data, newIssue]);
    }
    setBacklogEdit(false);
  };

  return (
    <div className={style.Board}>
      <BoardItem
        role={{ name: "backlog", header: "Backlog" }}
        issues={data.filter((item) => item.status === "backlog")}
        handleAddClick={handleBacklogAddClick}
        handleSubmitClick={handleSubmitClick}
        edit={backlogEdit}
      />
      <BoardItem
        role={{ name: "ready", header: "Ready" }}
        issues={data.filter((item) => item.status === "ready")}
      />
      <BoardItem
        role={{ name: "in_progress", header: "In progress" }}
        issues={data.filter((item) => item.status === "in_progress")}
      />
      <BoardItem
        role={{ name: "finished", header: "Finished" }}
        issues={data.filter((item) => item.status === "finished")}
      />
    </div>
  );
}
