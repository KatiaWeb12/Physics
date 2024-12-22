import { Formula } from "@/types";
import "./CardList.css";
import Card from "../Card/Card";

interface Props{
  formulas: Formula[];
}

export default function CardList({formulas}:Props) {
  return (
    <div className="card_list">
      {
        formulas.map(formula => <Card key={formula.id} formulaInfo={formula}/>)
      }
    </div>
  );
}
