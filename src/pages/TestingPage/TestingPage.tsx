import { ContentWrapper } from '@/components'
import './TestingPage.css'
import { useState } from 'react'
import { ClassTypes } from '@/types'
import ClassesList from '@/components/ClassesList/ClassesList'
import { ClassesListNames } from '@/constants'

const tabs = [...Object.values(ClassesListNames), 'Всё']

export default function TestingPage() {
  const [activeClass, setActiveClass] = useState<string>()
  //Страница: тестирование
  return (
    <ContentWrapper>
      <h2>Проверь себя!</h2>
      <ClassesList activeTab={activeClass} setActiveTab={setActiveClass} tabs={tabs} />
    </ContentWrapper>
  )
}