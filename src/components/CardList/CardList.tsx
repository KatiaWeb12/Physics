import { Formula } from "@/types";
import styles from "./CardList.module.css"
import Card from "../Card/Card";
import CardSkeleton from "../Card/CardSkeleton";

interface Props {
  formulas: Formula[];
  isLoading: boolean;
}

export default function CardList({ formulas, isLoading }: Props) {
  return (
    <div className={styles.card_list}>
      {
        formulas.map(formula => <Card key={formula.id} formulaInfo={formula} />)
      }
      {
        isLoading && <CardSkeleton />
      }
    </div>
  );
}
