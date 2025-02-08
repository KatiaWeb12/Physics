import "./TasksList.css";
import Task from "../Task/Task";
import { TestingTask } from '@/types'

// типизация пропсов
interface Props {
  tasks: TestingTask[];
  amountOfCorrectAnswers: number;
  setAmountOfCorrectAnswers: (amountOfCorrectAnswers: number) => void;
}

//Список заданий
export default function TasksList({ tasks, setAmountOfCorrectAnswers, amountOfCorrectAnswers }: Props) {
  return (
    <div className="tasksList">
      {
        tasks.map((task, i) => <Task task={task} taskNumber={i + 1} key={task.testId} setAmountOfCorrectAnswers={setAmountOfCorrectAnswers} amountOfCorrectAnswers={amountOfCorrectAnswers} />)
      }
    </div>
  );
}
