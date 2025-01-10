import { useAppSelector } from '@/redux'
import { CardList } from '@/components';

interface Props {
  themeId: number;
}

//компонент списка с формулами
export default function FormulaList({ themeId }: Props) {
  const formulas = useAppSelector((state) => state.class.formulas.filter(formula => formula.themeId === Number(themeId)))
  return (
    <CardList formulas={formulas} isLoading={false} />
  )
}