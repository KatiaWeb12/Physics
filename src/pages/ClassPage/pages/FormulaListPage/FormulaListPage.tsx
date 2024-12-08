import { useParams } from 'react-router-dom'
import './FormulaListPage.css'
import { useAppSelector } from '@/redux'

export default function FormulaListPage(){
   const { id } = useParams()
   const formulas = useAppSelector((state)=>state.class)
   console.log(formulas)
    return(
      <>

      </>
    )
}