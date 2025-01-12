import { ClassesListNames } from '@/constants';
import type { ClassTypes } from '@/types';
import ClassItem from '../ClassItem/ClassItem';

interface Props {
   setActiveClass: (activeId: ClassTypes) => void;
   activeClass?: ClassTypes;
}
export default function ClassesList({ activeClass, setActiveClass }: Props) {
   return (
      <div className="class_topics">
         {
            (Object.keys(ClassesListNames) as ClassTypes[]).map(key => (
               <ClassItem
                  nameOfClass={ClassesListNames[key]}
                  setActiveClass={setActiveClass}
                  activeClass={activeClass}
                  typeOfClass={key}
                  key={key}
               />
            ))}
      </div>
   )
}