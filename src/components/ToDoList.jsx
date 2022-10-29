import { Table, Button, ButtonGroup } from "@geist-ui/core";
import { Trash2 } from "@geist-ui/icons";
import { CheckCircle } from "@geist-ui/icons";
import React from "react";
const ToDoList = ({ todos, setTodos }) => {
  const renderAction = (id) => {
    const removeHandler = () => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    const completeHandler = () => {
      setTodos(
        todos.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      );
    };
    return (
      <div>
        <Button
          type="error-light"
          scale={2 / 3}
          font="12px"
          onClick={removeHandler}
          iconRight={<Trash2 />}
          auto
          style={{ marginRight: "10px" }}
        >
          Remove
        </Button>

        <Button
          type="success-light"
          scale={2 / 3}
          font="12px"
          onClick={completeHandler}
          iconRight={<CheckCircle />}
          auto
        >
          Complete
        </Button>
      </div>
    );
  };

  return (
    <Table data={todos}>
      <Table.Column prop="id" label="id" />
      <Table.Column prop="text" label="description" />
      <Table.Column
        prop="completed"
        label="completed"
        render={(value) =>
          value ? (
            <div
              style={{
                backgroundColor: "green",
                padding: "10px 20px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              Completed
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "red",
                padding: "10px 20px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              Not Completed
            </div>
          )
        }
      />
      <Table.Column
        label="Delete / Complete"
        render={(value, rowData, rowIndex) => renderAction(rowData.id)}
      />
    </Table>
  );
};

export default ToDoList;
