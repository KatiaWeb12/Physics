import { ClassesListNames } from '@/constants';
import ClassItem from '../ClassItem/ClassItem';

interface Props {
   setActiveTab: (activeId: string) => void;
   activeTab?: string;
   tabs: string[];
}
export default function Tabs({ activeTab, setActiveTab, tabs }: Props) {
   return (
      <div className="class_topics">
         {
            (tabs.map(key => (
               <ClassItem
                  nameOfClass={key}
                  setActiveClass={setActiveTab}
                  activeClass={activeTab}
                  typeOfClass={key}
                  key={key}
               />
            )))
         }
      </div>
   )
}