import { ContentWrapper } from '@/components'
import './TestingPage.css'
import { useEffect, useState } from 'react'
import { TestingTask } from '@/types'
import { agent } from '@/api'
import { Tabs } from '@/components'
import TasksList from './components/TasksList/TasksList'


// Страница: тестирование
export default function TestingPage() {
  //задания
  const [tasks, setTasks] = useState<TestingTask[]>([])
  // активный класс
  const [activeTab, setActiveTab] = useState<string>();
  //disabled
  const [disabledTabs, setDisabledTabs] = useState<boolean>(false);

  // функция изменения класса
  function setActiveTabHandle(newValue: string) {
    setActiveTab(newValue);
  }
  //сброс тестовых вопросов
  function resetTest() {
    setDisabledTabs(false)
    setActiveTab(undefined)
    setTasks([])
  }
  useEffect(() => {
    async function getData() {
      try {
        // получение формул
        if (activeTab === 'all') {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test`);
          setTasks(tasks);
        }
        else {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test?classType=${activeTab}`);
          setTasks(tasks);
        }
      }
      catch (err) {
        console.info(err);
      }
    }
    // если класс поменялся, сбрасываем данные
    if (activeTab) {
      setDisabledTabs(true);
      getData();
    }
  }, [activeTab]);
  return (
    <ContentWrapper>
      <h2 className='test_title'>Выберите раздел для тестирования</h2>
      <div className="test_content">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTabHandle} all={true} disabled={disabledTabs} />
        {Boolean(activeTab) && <TasksList tasks={tasks} />}
        {Boolean(activeTab) && <button className="reset_test_button" onClick={resetTest}>Закончить тестирование</button>}
      </div>
    </ContentWrapper>
  )
}