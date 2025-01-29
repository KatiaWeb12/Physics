import { ContentWrapper } from '@/components'
import './TestingPage.css'
import { useEffect, useState } from 'react'
import { TestingTask } from '@/types'
import { agent } from '@/api'
import { Tabs } from '@/components'
import TasksList from './components/TasksList/TasksList'
import Timer from './components/Timer/Timer'


// Страница: тестирование
export default function TestingPage() {
  //задания
  const [tasks, setTasks] = useState<TestingTask[]>([])
  // активный класс
  const [activeTab, setActiveTab] = useState<string>();
  // disabled
  const [disabledTabs, setDisabledTabs] = useState<boolean>(false);
  // окончен ли тест
  const [testIsOver, setTestIsOver] = useState(false)
  //пройденное время
  const [timerLeft, setTimerLeft] = useState(0)
  
  // функция изменения класса
  function setActiveTabHandle(newValue: string) {
    setActiveTab(newValue);
  }
  // сброс тестовых вопросов
  function resetTest() {
    setDisabledTabs(false)
    setActiveTab(undefined)
    setTestIsOver(false)
    setTasks([])
  }
  // окончание теста
  function finishTest(){
    setTestIsOver(true)
  }
  useEffect(() => {
    async function getData() {
      try {
        // получение формул
        if (activeTab === 'all') {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test`);
          setTasks(tasks.sort(() => Math.random() - 0.5));
        }
        else {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test?classType=${activeTab}`);
          setTasks(tasks.sort(() => Math.random() - 0.5));
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
        <div className="test_content_header">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTabHandle} all={true} disabled={disabledTabs} />
          {Boolean(activeTab) && <Timer stopTimer={testIsOver} timerLeft={timerLeft} setTimerLeft={setTimerLeft}/>}
        </div>
        {Boolean(activeTab) && <TasksList tasks={tasks} />}
        {Boolean(activeTab) && <button className="reset_test_button" onClick={finishTest}>Закончить тестирование</button>}
      </div>
    </ContentWrapper>
  )
}