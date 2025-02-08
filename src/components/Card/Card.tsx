import { Formula } from "@/types";
import styles from "./Card.module.css"
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
      <div className={styles.card}>
        <img src={formulaInfo.image} alt="formula_img" />
        <div className={styles.card_info}>
          <div className={styles.topic_cont}>
            <h6 className={styles.topic}>{formulaInfo.title}</h6>
          </div>
          <p className={styles.descp}>
            {formulaInfo.description}
          </p>
        </div>
        <div className={styles.learn_more}>
          <button className={styles.button} onClick={setIsLearnMoreHendler}>Изучить</button>
        </div>
      </div>
      {isLearnMore && <ModalWindow setIsLearnMoreHendler={setIsLearnMoreHendler} formulaInfo={formulaInfo} />}
    </>
  );
}
