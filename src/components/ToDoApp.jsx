import React from "react";
import ToDoList from "./ToDoList";
import { Input } from "@geist-ui/core";
import { Plus } from "@geist-ui/icons";
const ToDoApp = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn Geist", completed: false },
  ]);

  return (
    <>
      <Input
        placeholder="Add a todo"
        width="100%"
        type="success"
        iconRight={<Plus />}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodos([
              ...todos,
              //id  = last id + 1
              {
                id: todos[todos.length - 1].id + 1,
                text: e.target.value,
                completed: false,
              },
            ]);
            e.target.value = "";
          }
        }}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default ToDoApp;
