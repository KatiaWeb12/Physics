import styles from "../../pages/ClassPage/ClassPage.module.css";

interface Props {
   setActiveClass: (activeId: string) => void;
   activeClass?: string;
   typeOfClass: string;
   nameOfClass: string;
}
export default function ClassItem({ activeClass, setActiveClass, nameOfClass, typeOfClass }: Props) {
   return (
      <div
         className={typeOfClass === activeClass ? styles.active_theme : styles.topic_cont_class}
         onClick={() => setActiveClass(typeOfClass)}
      >
         {nameOfClass}
      </div>
   )
}