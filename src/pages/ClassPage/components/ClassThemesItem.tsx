import styles from "../ClassPage.module.css";

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
      className={themeId === activeThemeId ? styles.active_theme : styles.topic_cont_class}
      onClick={() => onClickHandle(themeId)}>
      {themeName}
    </div>
  )
}