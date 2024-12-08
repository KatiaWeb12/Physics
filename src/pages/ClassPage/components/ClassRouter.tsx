import { Route, Routes } from 'react-router-dom'
import { ROOT_ROUTES } from '@/constants'
import FormulaListPage from '../pages/FormulaListPage/FormulaListPage'

export default function ClassRouter(){
    return(
      <Routes>
         <Route path={`${ROOT_ROUTES.class_7}/:id`} element={<FormulaListPage/>}/>
      </Routes>
    )
}