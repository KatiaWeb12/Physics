import "./RepeatingPage.css";
import Left from "../../static/arrow_left.png";
import Right from "../../static/arrow_right.png";

export default function RepeatingPage() {
  return (
    <div className="repeating">
      <p className="rep_title">Повторение</p>
      <div className="card_repeating">
        <div className="side">
          <img src={Left} alt="left" />
          <div className="topic_cont">
            <h6 className="topic">Тема</h6>
          </div>
        </div>
        <div className="rep_card">
          <div className="topic_cont">
            <h6 className="topic">Тема</h6>
          </div>
          <p className="formula_text">Описание формулы для повторения.</p>
        </div>
        <div className="side">
          <img src={Right} alt="right" />
          <div className="topic_cont">
            <h6 className="topic">Тема</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
