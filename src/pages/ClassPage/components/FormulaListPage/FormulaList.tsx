import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/redux'

interface Props {
  themeId: number;
}
export default function FormulaList({ themeId }: Props) {
  const formulas = useAppSelector((state) => state.class.formulas.filter(el => el.themeId === Number(themeId)))
  return (
    <>
      {
        formulas.map(el => el.title)
      }
    </>
  )
}