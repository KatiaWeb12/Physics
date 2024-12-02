import ClassThemesItem from "./ClassThemesItem";
import "../ClassPage.css";
//типизация пропса -> список тем
interface Props {
  themes: string[];
}
//список тем
export default function ClassThemesList({ themes }: Props) {
  return (
    <div className="class_topics">
      {themes.map((theme, key) => <ClassThemesItem key={key} theme={theme} link={'/'} />)}
    </div>
  );
}