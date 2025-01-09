import { ContentWrapper } from '@/components'
import './NotFoundPage.css'

//Страница: некорректная ссылка
export default function NotFoundPage() {
  return (
    <ContentWrapper>
      <p className="not-found-page">Страница не найдена</p>
    </ContentWrapper>
  )
}