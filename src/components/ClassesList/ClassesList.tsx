import { ClassesListNames, TabListNames } from '@/constants';
import ClassItem from '../ClassItem/ClassItem';

interface Props {
   setActiveTab: (activeId: string) => void;
   activeTab?: string;
   all: Boolean;
}
export default function Tabs({ activeTab, setActiveTab, all }: Props) {
   let tabs = all ? TabListNames : ClassesListNames
   return (
      <div className="class_topics">
         {
               (Object.keys(tabs).map(key => (
                  <ClassItem
                     nameOfClass={tabs[key]}
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