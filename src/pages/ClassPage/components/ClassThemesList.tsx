import ClassThemesItem from "./ClassThemesItem";
import type { Theme } from "@/types";
import styles from "../ClassPage.module.css";

// типизация пропса -> список тем
interface Props {
  setActiveThemeId: (activeId: number) => void;
  activeThemeId: number;
  themes: Theme[];
}

// компонент списка тем
export default function ClassThemesList({ themes, setActiveThemeId, activeThemeId }: Props) {
  return (
    <div className={styles.class_topics}>
      {themes.map(theme => <ClassThemesItem
        onClickHandle={setActiveThemeId}
        activeThemeId={activeThemeId}
        themeName={theme.themeName}
        themeId={theme.themeId}
        key={theme.themeId}
      />)
      }
    </div>
  );
}