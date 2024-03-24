"use client";
import { useAppDispatch } from "@/app/hooks/hooks";
import { addTodo } from "@/app/redux/todoSlice";
import React, { useState } from "react";

export default function Actions() {
  const [input, setinput] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Actions</p>

      <input
        type="text"
        value={input}
        style={{ border: "1px solid red" }}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          dispatch(addTodo(input));
          setinput("");
        }}
      >
        Add
      </button>
    </div>
  );
}
