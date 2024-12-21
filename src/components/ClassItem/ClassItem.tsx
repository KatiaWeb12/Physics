interface Props {
   nameOfClass: string;
   activeClass: string;
   typeOfClass: string;
   setActiveClass: (activeId: string) => void;
}
export default function ClassItem({ activeClass, setActiveClass, nameOfClass, typeOfClass }: Props) {
   return (
      <div className={typeOfClass === activeClass ? "active_theme" : "topic_cont_class"} onClick={() => setActiveClass(typeOfClass)}>
         {nameOfClass}
      </div >
   )
}