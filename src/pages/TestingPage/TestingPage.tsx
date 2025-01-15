import { ContentWrapper } from '@/components'
import './TestingPage.css'
import { useEffect, useState } from 'react'
import { TestingTask } from '@/types'
import { ClassesListNames } from '@/constants'
import { agent } from '@/api'
import Tabs from '@/components/ClassesList/ClassesList'
import TasksList from './components/TasksList/TasksList'

const tabs = [...Object.values(ClassesListNames), 'Всё']

// Страница: тестирование
export default function TestingPage() {
  // активный класс
  const [activeClass, setActiveClass] = useState<string>();
  // функция изменения класса
  function setActiveClassHandle(newValue: string) {
    setActiveClass(newValue);
  }

  useEffect(() => {
    async function getData() {
      try {
        // получение формул
        if (activeClass === 'all') {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test`);
        }
        else {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test?classType=${activeClass}`);
        }
      }
      catch (err) {
        console.info(err);
      }
    }
    // если класс поменялся, сбрасываем данные
    if (activeClass) {
      getData()
    }
  }, [activeClass]);
  return (
    <ContentWrapper>
      <div className='test_title'>
        <h2>Задания</h2>
      </div>
      <Tabs activeTab={activeClass} setActiveTab={setActiveClass} all={true} />
      <TasksList />
    </ContentWrapper>
  )
}