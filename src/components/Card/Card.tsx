import Button from "../Button/Button";
import "./Card.css";
export default function Card() {
  return (
    <div className="card">
      <img src="" alt="" />
      <div className="card_info">
        <div className="topic_cont">
          <h6 className="topic">Тема</h6>
        </div>
        <p>
          Описание форулы. Описание формулы - это текстовое объяснение или
          инструкция, описывающая ту или иную математическую или научную
          формулу, ее структуру, элементы, значения переменных и ее применение в
          конкретной ситуации.
        </p>
      </div>
      <div className="learn_more">
        <Button />
      </div>
    </div>
  );
}
