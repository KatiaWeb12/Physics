import { useLocation } from "react-router-dom";
import "../ClassPage.css";

//типизация пропса -> {тема, ссылка}
interface Props {
  themeName: string;
  themeId: number;
}
export default function ClassThemesItem({ themeName, themeId}: Props) {
  const { pathname } = useLocation()
  return (
    <div className="topic_cont_class">
      <a className="class_theme" href={`${pathname}/${themeId}`}>
        {themeName}
      </a>
    </div>
  )
}