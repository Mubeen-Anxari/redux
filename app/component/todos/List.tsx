import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { removeTodo } from "@/app/redux/todoSlice";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function List() {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  return (
    <div>
      <ul>
        {todos?.map((item) => {
          return (
            <div style={{ display: "flex" }}>
              <li
                onClick={() => {
                  dispatch(removeTodo(item));
                }}
              >
                {item}
              </li>
              <MdDelete size={40} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
