import { ITask } from "../Intefaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

export default function Todo({ task, deleteTask }: Props) {
  return (
    <div>
      {task.taskName} {task.taskImportance}
      <button onClick={() => deleteTask(task.taskName)}>X</button>
    </div>
  );
}
