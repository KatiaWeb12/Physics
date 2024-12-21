import { Formula } from "@/types";
import "./Card.css";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

interface Props {
  formulaInfo: Formula;
}

//компонент карточки с описанием формулы
export default function Card({ formulaInfo }: Props) {
  //состояние открытого модального окна
  const [isLearnMore, setIsLearnMore] = useState(false)

  function setIsLearnMoreHendler() {
    setIsLearnMore(!isLearnMore)
  }
  return (
    <>
      {isLearnMore && (<ModalWindow setIsLearnMoreHendler={setIsLearnMoreHendler} formulaInfo={formulaInfo}/>)}
      <div className="card">
        <img src={formulaInfo.image} alt="" />
        <div className="card_info">
          <div className="topic_cont">
            <h6 className="topic">{formulaInfo.title}</h6>
          </div>
          <p>
            {formulaInfo.description}
          </p>
        </div>
        <div className="learn_more">
          <button className="button" onClick={setIsLearnMoreHendler}>Изучить</button>
        </div>
      </div>
    </>
  );
}
