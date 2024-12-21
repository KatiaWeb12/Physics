import { Formula } from '@/types'
import './RepeatingCard.css'

interface Props{
   formula: Formula;
}
export default function RepeatingCard({formula:{title, image}}:Props) {
   return (
      <>
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
      </>
   )
}