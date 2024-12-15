import "../ClassPage.css";

//типизация пропса -> {тема, ссылка}
interface Props {
  themeName: string;
  onClickHandle: (activeId: number) => void;
  themeId: number;
  activeThemeId: number;
}

//компонент темы
export default function ClassThemesItem({ themeName, themeId, onClickHandle, activeThemeId }: Props) {
  return (
    <div className={themeId === activeThemeId ? "active_theme" : "topic_cont_class"} onClick={() => onClickHandle(themeId)}>
      {themeName}
    </div >
  )
}