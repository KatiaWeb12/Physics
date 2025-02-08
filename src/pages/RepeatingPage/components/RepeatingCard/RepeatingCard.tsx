import { Formula } from '@/types'
import styles from "./RepeatingCard.module.css"

interface Props {
   formula: Formula;
   slideType: 'question' | 'answer';
   onFlippHendle: () => void;
}
export default function RepeatingCard({ formula: { title, image }, slideType, onFlippHendle }: Props) {
   return (
      slideType === 'question' ? (
         <div onClick={onFlippHendle} className={styles.rep_card}>
            <div className={styles.rounds}>
               <div className={styles.rounds}></div>
               <div className="round main_round"></div>
               <div className={styles.rounds}></div>
            </div>
            <p className={styles.formula_text}>{title}</p>
            <div className={styles.rep_card_button}>
               <button className={styles.card_button}>Не знаю</button>
               <button className={styles.card_button}>Знаю</button>
            </div>
         </div>
      ) : (
         <div onClick={onFlippHendle} className={styles.rep_card}>
            <img src={image} className={styles.formula_slide_image} alt="FormulaImage" />
         </div>
      )
   )
}