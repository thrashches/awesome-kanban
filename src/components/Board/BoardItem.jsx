import React from "react";
import style from "./Board.module.scss";
import { Issue } from "./Issue";
import { AddButton } from "../Buttons/Buttons";
import { NewIssue } from "./NewIssue";

export function BoardItem(props) {
  const { role, issues, handleAddClick, handleSubmitClick, edit } = props;

  return (
    <div className={style.BoardItem}>
      <div className={style.BoardItem__header}>
        <h6>{role.header}</h6>
      </div>
      <div className={style.BoardItem__body}>
        {issues?issues.map((issue)=><Issue issue={issue}/>):<></>}
        {edit && role.name==='backlog'?<NewIssue handleSubmitClick={handleSubmitClick}/>:<></>}
      </div>
      <div className={style.BoardItem__footer}>
        {!(edit&& role.name==='backlog')?<AddButton onClick={handleAddClick}/>:<></>}
      </div>
    </div>
  );
}
