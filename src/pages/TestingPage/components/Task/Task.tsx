import { TestingTask } from "@/types";
import "./Task.css";
import { ChangeEvent, useState } from "react";

interface Props {
  task: TestingTask;
  taskNumber: number;
}

//Тестовое задание
export default function Task({ task, taskNumber }: Props) {
  //ответ пользователя
  const [userAnswer, setUserAnswer] = useState('')
  //состояние ответа пользователя
  const [answerChecked, setAnswerChecked] = useState({
    checked: false,
    correct: false
  })

  //функция-обработчик input
  function onChangeUserAnswer(event: ChangeEvent<HTMLInputElement>) {
    setUserAnswer(event.target.value)
  }
  //функция при проверке ответа меняет состояние
  function checkUserAnswer() {
    setAnswerChecked({
      checked: true,
      correct: userAnswer === task.correctAnswer
    });
  }

  return (
    <div className="task">
      <div className="task_title">
        <p>Задание №{taskNumber}</p>
      </div>
      <p className="task_text">
        {task.question}
      </p>
      <div className="task_answer">
        <input type="text" readOnly={answerChecked.checked} placeholder="Ответ" value={userAnswer} onChange={onChangeUserAnswer} />
        {answerChecked.checked ? <p>Ответ: {task.correctAnswer}</p> : <button onClick={checkUserAnswer}>Проверить</button>}
      </div>
    </div>
  );
}
