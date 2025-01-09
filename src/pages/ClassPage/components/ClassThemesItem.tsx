import classNames from "classnames";
import "../ClassPage.css";

//типизация пропса -> {тема, ссылка}
interface Props {
  onClickHandle: (activeId: number) => void;
  activeThemeId: number;
  themeName: string;
  themeId: number;
}

//компонент темы
export default function ClassThemesItem({ themeName, themeId, onClickHandle, activeThemeId }: Props) {
  return (
    <div
      className={classNames('topic_cont_class', { "active_theme": themeId === activeThemeId })}
      onClick={() => onClickHandle(themeId)}>
      {themeName}
    </div>
  )
}