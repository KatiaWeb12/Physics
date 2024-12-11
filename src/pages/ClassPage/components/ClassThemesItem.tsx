import "../ClassPage.css";

//типизация пропса -> {тема, ссылка}
interface Props {
  themeName: string;
  onClickHandle: (activeId: number) => void;
  themeId: number;
}

//компонент темы
export default function ClassThemesItem({ themeName, themeId, onClickHandle }: Props) {
  return (
    <div className="topic_cont_class" onClick={() => onClickHandle(themeId)}>
      {themeName}
    </div >
  )
}