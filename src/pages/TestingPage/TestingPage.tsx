import { ContentWrapper } from '@/components'
import styles from './TestingPage.module.css'
import { useEffect, useState } from 'react'
import { TestingTask } from '@/types'
import { agent } from '@/api'
import { Tabs } from '@/components'
import TasksList from './components/TasksList/TasksList'
import Timer from './components/Timer/Timer'
import TestModalWindow from './components/TestModalWindow/TestModalWindow'
import { convertTime } from '@/utils'

const TASKS_AMOUNT = 10

// Страница: тестирование
export default function TestingPage() {
  //задания
  const [tasks, setTasks] = useState<TestingTask[]>([])
  //активный класс
  const [activeTab, setActiveTab] = useState<string>();
  //disabled
  const [disabledTabs, setDisabledTabs] = useState<boolean>(false);
  //окончен ли тест
  const [testIsOver, setTestIsOver] = useState(false)
  //пройденное время
  const [timerLeft, setTimerLeft] = useState(0)
  //количество верных ответов
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] = useState(0)

  // функция изменения класса
  function setActiveTabHandle(newValue: string) {
    setActiveTab(newValue);
  }

  // окончание теста
  function finishTest() {
    setTestIsOver(true)
  }

  // продолжение теста
  function continueTest() {
    setTestIsOver(false)
  }

  // сброс тестовых вопросов
  function resetTest() {
    setDisabledTabs(false)
    setActiveTab(undefined)
    setTestIsOver(false)
    setTimerLeft(0)
    setTasks([])
    setAmountOfCorrectAnswers(0)
  }


  useEffect(() => {
    async function getData() {
      try {
        // получение формул
        if (activeTab === 'all') {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test?_limit=${TASKS_AMOUNT}`);
          setTasks(tasks.sort(() => Math.random() - 0.5));
        }
        else {
          const { data: tasks } = await agent.get<TestingTask[]>(`/test?classType=${activeTab}&_limit=${TASKS_AMOUNT}`);
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
      <h2 className={styles.test_title}>Выберите раздел для тестирования</h2>
      <div className={styles.test_content}>
        <div className={styles.test_content_header}>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTabHandle} all={true} disabled={disabledTabs} />
          {Boolean(activeTab) && <Timer stopTimer={testIsOver} timerLeft={timerLeft} setTimerLeft={setTimerLeft} />}
        </div>
        {Boolean(activeTab) && (
          <TasksList
            tasks={tasks}
            setAmountOfCorrectAnswers={setAmountOfCorrectAnswers}
            amountOfCorrectAnswers={amountOfCorrectAnswers}
          />
        )}
        {Boolean(activeTab) && <button className={styles.reset_test_button} onClick={finishTest}>Закончить тестирование</button>}
        {Boolean(testIsOver) && (
          <TestModalWindow
            tasksAmount={TASKS_AMOUNT}
            result={amountOfCorrectAnswers}
            time={convertTime(timerLeft)}
            resetTest={resetTest}
            continueTest={continueTest}
          />
        )}
      </div>
    </ContentWrapper>
  )
}