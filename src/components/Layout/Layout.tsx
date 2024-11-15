import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.css'

export default function Layout(){
    return(
      <>
         <Header/>
         <Outlet/>
      </>
    )
}