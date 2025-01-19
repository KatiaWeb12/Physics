import "./TasksList.css";
import Task from "../Task/Task";
import { TestingTask } from '@/types'

interface Props{
  tasks: TestingTask[];
}

//Список заданий
export default function TasksList({ tasks }:Props) {
  return (
    <div className="tasksList">
      {
        tasks.map((task, i) => <Task task={task} taskNumber={i + 1} key={task.testId}/>)
      }
    </div>
  );
}
