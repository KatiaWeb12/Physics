import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { ROOT_ROUTES } from "../../constants";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

//ссылки
const links = [
  {
    title: 'Главная',
    route: ROOT_ROUTES.main_page,
  },
  {
    title: '7 класс',
    route: ROOT_ROUTES.class_7,
  },
  {
    title: '8 класс',
    route: ROOT_ROUTES.class_8,
  },
  {
    title: '9 класс',
    route: ROOT_ROUTES.class_9,
  },
  {
    title: 'Повторение',
    route: ROOT_ROUTES.repeating,
  },
  {
    title: 'Тест',
    route: ROOT_ROUTES.testing,
  },

]
//блоки Header
const headerBlocksArray = [[links[0]], links.slice(1, 4), links.slice(4, 6)];

//компонент Header
export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <ContentWrapper>
        <nav className="header_cont">
          {
            headerBlocksArray.map((el, index) => (
              <div className="header_block" key={index}>
                {
                  el.map((linksItem) => (
                    <Link
                      key={linksItem.route}
                      to={linksItem.route}
                      className={
                        pathname === linksItem.route ? "active_link menu_cont" : "menu_cont"
                      }
                    >
                      {linksItem.title}
                    </Link>
                  ))
                }
              </div>
            )
            )}
        </nav>
      </ContentWrapper>
    </header>
  );
}