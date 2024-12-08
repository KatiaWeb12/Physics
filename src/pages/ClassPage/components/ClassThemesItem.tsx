import { useLocation } from "react-router-dom";
import "../ClassPage.css";

//типизация пропса -> {тема, ссылка}
interface Props {
  themeName: string;
  onClickHandle: (activeId: number) => void;
  themeId: number;
}
export default function ClassThemesItem({ themeName, themeId, onClickHandle }: Props) {
  const { pathname } = useLocation()
  return (
    <div className="topic_cont_class" onClick={() => onClickHandle(themeId)}>
      {themeName}
    </div >
  )
}