import "../ClassPage.css";

interface Props {
  theme: string;
  link: string;
}

export default function ClassThemesItem({ theme, link }: Props) {
  return (
    <div className="topic_cont_class" key={theme}>
      <a className="class_theme" href={link}>
        {theme}
      </a>
    </div>
  )
}