import ClassThemesItem from "./ClassThemesItem";
import "../ClassPage.css";
import { Theme } from "@/types";

//типизация пропса -> список тем
interface Props {
  themes: Theme[];
}

//список тем
export default function ClassThemesList({ themes }: Props) {
  return (
    <div className="class_topics">
      {themes.map((theme, key) => <ClassThemesItem key={key} themeName={theme.themeName} themeId={theme.themeId}/>)}
    </div>
  );
}