import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delet from "../assets/delet.png";
const Todoitems = ({ text, id, isComplete, deleteTodo, toggle, clearAll }) => {
  return (
    <div className="flex items-center my-3 gap-2 ">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delet}
        alt=""
        className="w-5 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
