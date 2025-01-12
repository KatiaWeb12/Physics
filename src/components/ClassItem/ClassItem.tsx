import classNames from "classnames";

interface Props {
   setActiveClass: (activeId: string) => void;
   activeClass?: string;
   typeOfClass: string;
   nameOfClass: string;
}
export default function ClassItem({ activeClass, setActiveClass, nameOfClass, typeOfClass }: Props) {
   return (
      <div
         className={classNames('topic_cont_class', { "active_theme": typeOfClass === activeClass })}
         onClick={() => setActiveClass(typeOfClass)}
      >
         {nameOfClass}
      </div>
   )
}