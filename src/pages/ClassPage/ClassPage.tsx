import './ClassPage.css'
interface Props{
   classType: ClassTypes;
}
type ClassTypes = 'class_7' | 'class_8' | 'class_9'
export default function ClassPage({classType}:Props){
  let themes: string[] = [];
  if(classType === 'class_7'){
    themes = ['Общие знания', 'Работа. Энергия', 'Силы в природе', 'Давление'];
  }
  else if(classType === 'class_8'){
    themes = ['Термодинамика', 'Электричество', 'Магнитные явления', 'Оптика'];
  }
  else if(classType === 'class_9'){
    themes = ['Механика', 'Механика. Движение по окружности', 'Импульс. Работа. Энергия', 'Статика. Гидростатика', 'Колебания. Волны', 'Электромагнитная индукция'];
  }
    return(
      <div className="class_topics">
        {
          themes.map((theme, key)=>{
            return (
              <div className="topic_cont_class">
                <a className='class_theme' key={key}>{theme}</a>
              </div>
            )
          })
      
        }
      </div>
    )
}