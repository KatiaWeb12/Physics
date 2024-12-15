import ClassThemesItem from "./ClassThemesItem";
import "../ClassPage.css";
import { Theme } from "@/types";

//типизация пропса -> список тем
interface Props {
  setActiveThemeId: (activeId: number) => void;
  themes: Theme[];
  activeThemeId: number;
}

//компонент списка тем
export default function ClassThemesList({ themes, setActiveThemeId, activeThemeId }: Props) {

  return (
    <div className="class_topics">
      {themes.map(theme => <ClassThemesItem activeThemeId={activeThemeId} key={theme.themeId} themeName={theme.themeName} themeId={theme.themeId} onClickHandle={setActiveThemeId} />)}
    </div>
  );
}