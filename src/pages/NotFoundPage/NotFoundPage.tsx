import { ContentWrapper, ErrorContent } from '@/components'

//Страница: некорректная ссылка
export default function NotFoundPage() {
  return (
    <ContentWrapper>
      <ErrorContent text='Страница не найдена' />
    </ContentWrapper>
  )
}