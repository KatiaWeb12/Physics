import { useAppSelector } from '@/redux/hooks/useAppSelector'
import Card from '@/components/Card/Card';
import "./FormulaList.css";

interface Props {
  themeId: number;
}

//корпонент списка с формулами
export default function FormulaList({ themeId }: Props) {
  const formulas = useAppSelector((state) => state.class.formulas.filter(formula => formula.themeId === Number(themeId)))
  return (
    <div className="formula_list">
      {
        formulas.map(formula => <Card formulaInfo={formula}/>)
      }
    </div>
  )
}