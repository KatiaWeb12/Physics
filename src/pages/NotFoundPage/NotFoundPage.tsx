import { ContentWrapper } from '@/components'
import './NotFoundPage.css'

export default function NotFoundPage() {
  //Страница: некорректная ссылка
  return (
    <ContentWrapper>
      <div className="error">
        <p>Страница не найдена.</p>
      </div>
    </ContentWrapper>
  )
}