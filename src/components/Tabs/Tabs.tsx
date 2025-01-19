import { ClassesListNames, TabListNames } from '@/constants';
import ClassItem from '../ClassItem/ClassItem';
import classNames from 'classnames';
import "./Tabs.css"

interface Props {
   setActiveTab: (activeId: string) => void;
   activeTab?: string;
   all: boolean;
   disabled?: boolean;
}
export default function Tabs({ activeTab, setActiveTab, all, disabled }: Props) {
   let tabs = all ? TabListNames : ClassesListNames
   return (
      <div className={classNames('tabs', { "disabled_tabs": disabled })}>
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