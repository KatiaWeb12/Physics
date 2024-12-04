import "../ClassPage.css";
//типизация пропса -> {тема, ссылка}
interface Props {
  theme_name: string;
  theme_id: number;
  link: string;
}

export default function ClassThemesItem({ theme_name, theme_id, link }: Props) {
  return (
    <div className="topic_cont_class">
      <a className="class_theme" href={link}>
        {theme_name}
      </a>
    </div>
  )
}