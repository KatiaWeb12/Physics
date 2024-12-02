import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.css'

export default function Layout(){
  // слой, на который накладываются страницы.
    return(
      <>
         <Header/>
         <Outlet/>
      </>
    )
}