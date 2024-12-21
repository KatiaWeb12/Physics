import './RepeatingCard.css'

export default function RepeatingCard() {
   return (
      <>
         <div className="rounds">
            <div className="round"></div>
            <div className="round main_round"></div>
            <div className="round"></div>
         </div>
         <p className="formula_text">Описание формулы для повторения.</p>
         <div className="rep_card_button">
               <button className="card_button">Не знаю</button>
               <button className="card_button">Знаю</button>
         </div>
      </>
   )
}