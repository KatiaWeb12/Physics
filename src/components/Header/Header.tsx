import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_cont">
        <div className="header_block">
          <div className="menu_cont">
            <p>Добавить формулу</p>
          </div>
          <div className="menu_cont">
            <p>Тест</p>
          </div>
        </div>
        <div className="header_block">
          <div className="menu_cont">
            <p>7 класс</p>
          </div>
          <div className="menu_cont">
            <p>8 класс</p>
          </div>
          <div className="menu_cont">
            <p>9 класс</p>
          </div>
        </div>
        <div className="header_block">
          <div className="menu_cont">
              <p>Повторение</p>
            </div>
        </div>
      </div>
    </div>
  );
}
