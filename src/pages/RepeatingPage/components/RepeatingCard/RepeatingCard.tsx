import { Formula } from '@/types'
import './RepeatingCard.css'

interface Props {
   formula: Formula;
   slideType: 'question' | 'answer';
   onFlippHendle: () => void;
}
export default function RepeatingCard({ formula: { title, image }, slideType, onFlippHendle }: Props) {
   return (
      <>
         {slideType === 'question' ? (
            <div onClick={onFlippHendle} className="rep_card">
               <div className="rounds">
                  <div className="round"></div>
                  <div className="round main_round"></div>
                  <div className="round"></div>
               </div>
               <p className="formula_text">{title}</p>
               <div className="rep_card_button">
                  <button className="card_button">Не знаю</button>
                  <button className="card_button">Знаю</button>
               </div>
            </div>
         ) : (
            <div onClick={onFlippHendle} className="rep_card">
               <img src={image} className='formula_slide_image' alt="FormulaImage" />
            </div>
         )}
      </>
   )
}