import React, { useState } from "react";
import style from "./Dropdown.module.scss";
import { ReactComponent as ArrowIcon } from "./Arrow.svg";

export function Dropdown(props) {
  const { items } = props;
  const emptySelection = {
    id: null,
    title: "",
  }
  const [selected, setSelected] = useState(emptySelection);

  return (
    <>
      <div className={style.DropdownToggle}>
        <div>{selected.title}</div>
        <ArrowIcon/>
      </div>

      <div className={style.Dropdown}>
        {items ? items.map((item) => <div>{item.title}</div>) : <></>}
      </div>
    </>
  );
}
