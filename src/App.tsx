import React, { FC, useState } from "react";
import "./App.scss";
import { ITask } from "./Intefaces";
import Todo from "./components/Todo";

const App: FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskImportance, setTaskImportance] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    const newTask = {
      taskName: taskName,
      taskImportance: taskImportance,
    };
    setTodoList([...todoList, newTask]);
    setTaskName("");
    setTaskImportance(0);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <header>To do list with TypeScript</header>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Importance, 0-3"
        value={taskImportance}
        onChange={(event) => {
          setTaskImportance(Number(event.target.value));
        }}
      />
      <button onClick={addTask}>Save</button>
      {todoList.map((todo: ITask, key: number) => {
        return <Todo task={todo} key={key} deleteTask={deleteTask} />;
      })}
    </div>
  );
};

export default App;
