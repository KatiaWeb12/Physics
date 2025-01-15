import "./Task.css";

export default function Task() {
  return (
    <div className="task">
      <div className="task_title">
        <p>Задание №1</p>
      </div>
      <p className="task_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id
        impedit fuga earum hic minus dolores ipsum, pariatur sit quos officiis
        ea a itaque ratione voluptas aperiam autem sint vel.
      </p>
      <div className="task_answer">
        <input type="text" placeholder="Ответ" />
        <button>Проверить</button>
      </div>
    </div>
  );
}
