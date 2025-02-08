import { TestingTask } from "@/types";
import "./Task.css";
import { ChangeEvent, useState } from "react";
import ImageWithFullScreen from "../ImageWithFullScreen/ImageWithFullScreen";

//типизация пропсов
interface Props {
  task: TestingTask;
  taskNumber: number;
  amountOfCorrectAnswers: number;
  setAmountOfCorrectAnswers: (amountOfCorrectAnswers: number) => void;
}

//Тестовое задание
export default function Task({ task, taskNumber, setAmountOfCorrectAnswers, amountOfCorrectAnswers }: Props) {
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

  //проверка ответа на правильность
  function checkForCorrect() {
    if (userAnswer === task.correctAnswer) {
      setAmountOfCorrectAnswers(amountOfCorrectAnswers + 1)
      return true
    }
    return false
  }

  //функция при проверке ответа меняет состояние
  function checkUserAnswer() {
    setAnswerChecked({
      checked: true,
      correct: checkForCorrect()
    });
  }

  return (
    <div className="task">
      <div className="task_title">
        <p>Задание №{taskNumber}</p>
      </div>
      {task.testImage && <ImageWithFullScreen src={task.testImage} />}
      <p className="task_text">
        {task.question}
      </p>
      <div className="task_answer">
        <input type="text" className={answerChecked.checked && answerChecked.correct ? 'correct_answer' : answerChecked.checked ? 'wrong_answer' : ''} readOnly={answerChecked.checked} placeholder="Ответ" value={userAnswer} onChange={onChangeUserAnswer} />
        {answerChecked.checked ? <p>Ответ: {task.correctAnswer}</p> : <button onClick={checkUserAnswer}>Проверить</button>}
      </div>
    </div>
  );
}
