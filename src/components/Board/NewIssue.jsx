import React, { useState } from "react";
import style from "./Board.module.scss";
import { SubmitButton } from "../Buttons/Buttons";

export function NewIssue(props) {
  const [name, setName] = useState('');
  const {handleSubmitClick} = props;
  const submitIssue = () => {
    handleSubmitClick(name);
  }
  const handleInputChange = (event)  => {
    setName(event.currentTarget.value);
  }

  return <>
    <input className={style.Issue} onChange={handleInputChange}></input>
    <SubmitButton handleClick={submitIssue}/>
  </>;
}
