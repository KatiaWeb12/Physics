import ClassThemesItem from "./ClassThemesItem";
import "../ClassPage.css";
interface Props {
  themes: string[];
}

export default function ClassThemesList({ themes }: Props) {
  return (
    <div className="class_topics">
      {themes.map((theme, key) => <ClassThemesItem theme={theme} link={'/'} />)}
    </div>
  );
}