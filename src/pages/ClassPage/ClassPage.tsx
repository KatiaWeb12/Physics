import "./ClassPage.css";
interface Props {
  classType: ClassTypes;
}
type ClassTypes = "class_7" | "class_8" | "class_9";
export default function ClassPage({ classType }: Props) {
  let title: string = "";
  let themes: string[] = [];
  if (classType === "class_7") {
    themes = ["Общие знания", "Работа. Энергия", "Силы в природе", "Давление"];
    title = "7 класс";
  } else if (classType === "class_8") {
    themes = ["Термодинамика", "Электричество", "Магнитные явления", "Оптика"];
    title = "8 класс";
  } else if (classType === "class_9") {
    themes = [
      "Механика",
      "Механика. Движение по окружности",
      "Импульс. Работа. Энергия",
      "Статика. Гидростатика",
      "Колебания. Волны",
      "Электромагнитная индукция",
    ];
    title = "9 класс";
  }
  return (
    <div className="class_page">
      <h4>{title}</h4>
      <div className="class_topics">
        {themes.map((theme, key) => {
          return (
            <div className="topic_cont_class" key={key}>
              <a className="class_theme" href="\">
                {theme}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
