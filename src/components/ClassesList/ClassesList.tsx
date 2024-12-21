import ClassItem from '../ClassItem/ClassItem';

interface Props {
   activeClass: string;
   setActiveClass: (activeId: string) => void;
}

type ClassTypes = "class_7" | "class_8" | "class_9";
const ClassesListNames: Record<ClassTypes, string> = {
   class_7: "7 класс",
   class_8: "8 класс",
   class_9: "9 класс",
 };
export default function ClassesList({activeClass, setActiveClass}:Props){
    return(
      <div className="class_topics">
         {
            Object.keys(ClassesListNames).map(key => {
               return (
                 <ClassItem activeClass={activeClass} setActiveClass={setActiveClass} nameOfClass={ClassesListNames[key]} typeOfClass={key}/>
               )
             })
         }     
      </div>
    )
}