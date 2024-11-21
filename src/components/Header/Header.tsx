import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { ROOT_ROUTES } from "../../constants";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <nav className="header_cont">
        <div className="header_block">
            <Link
              to={ROOT_ROUTES.addFormula}
              className={
                pathname === ROOT_ROUTES.addFormula ? "active_link menu_cont" : "menu_cont"
              }
            >
              Добавить формулу
            </Link>
            <Link
              to={ROOT_ROUTES.testing}
              className={
                pathname === ROOT_ROUTES.testing ? "active_link menu_cont" : "menu_cont"
              }
            >
              Тест
            </Link>
        </div>
        <div className="header_block">
            <Link
              to={ROOT_ROUTES.class_7}
              className={
                pathname === ROOT_ROUTES.class_7 ? "active_link menu_cont" : "menu_cont"
              }
            >
              7 класс
            </Link>
            <Link
              to={ROOT_ROUTES.class_8}
              className={
                pathname === ROOT_ROUTES.class_8 ? "active_link menu_cont" : "menu_cont"
              }
            >
              8 класс
            </Link>
            <Link
              to={ROOT_ROUTES.class_9}
              className={
                pathname === ROOT_ROUTES.class_9 ? "active_link menu_cont" : "menu_cont"
              }
            >
              9 класс
            </Link>
        </div>
        <div className="header_block">
            <Link
              to={ROOT_ROUTES.repeating}
              className={
                pathname === ROOT_ROUTES.repeating ? "active_link menu_cont" : "menu_cont"
              }
            >
              Повторение
            </Link>
            <Link
              to={ROOT_ROUTES.main_page}
              className={
                pathname === ROOT_ROUTES.main_page ? "active_link menu_cont" : "menu_cont"
              }
            >
              Главная
            </Link>
        </div>
      </nav>
    </header>
  );
}
