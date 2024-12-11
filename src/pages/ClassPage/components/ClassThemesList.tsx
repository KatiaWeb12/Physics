import ClassThemesItem from "./ClassThemesItem";
import "../ClassPage.css";
import { Theme } from "@/types";

//типизация пропса -> список тем
interface Props {
  setActiveThemeId: (activeId: number) => void;
  themes: Theme[];
}

//компонент списка тем
export default function ClassThemesList({ themes, setActiveThemeId }: Props) {
  return (
    <div className="class_topics">
      {themes.map(theme => <ClassThemesItem key={theme.themeId} themeName={theme.themeName} themeId={theme.themeId} onClickHandle={setActiveThemeId} />)}
    </div>
  );
}