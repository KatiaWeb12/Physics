import { Link } from "react-router-dom";
import "./Header.css";
import { ROOT_ROUTES } from "../../constants";

export default function Header() {
  return (
    <header className="header">
      <nav className="header_cont">
        <div className="header_block">
          <div className="menu_cont">
            <Link to={ROOT_ROUTES.addFormula}>Добавить формулу</Link>
          </div>
          <div className="menu_cont">
            <Link to={ROOT_ROUTES.testing}>Тест</Link>
          </div>
        </div>
        <div className="header_block">
          <div className="menu_cont">
            <Link to={ROOT_ROUTES.class_7}>7 класс</Link>
          </div>
          <div className="menu_cont">
            <Link to={ROOT_ROUTES.class_8}>8 класс</Link>
          </div>
          <div className="menu_cont">
            <Link to={ROOT_ROUTES.class_9}>9 класс</Link>
          </div>
        </div>
        <div className="header_block">
          <div className="menu_cont">
            <Link to={ROOT_ROUTES.repeating}>Повторение</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
