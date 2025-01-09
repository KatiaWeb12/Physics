import { useState } from "react";
import type { AxiosResponse } from "axios";
import { useIntersectionObserver } from '@siberiacancode/reactuse';
import { useQuery } from '@siberiacancode/reactuse';
import { agent } from "@/api";
import { CardList, ContentWrapper, CardSkeletonList } from "@/components";
import type { Formula } from "@/types";

//Главная страница
const REQEST_LIMIT = 10;
export default function MainPage() {
  const [formulasList, setFormulasList] = useState<Formula[]>([]);
  const [offset, setOffset] = useState(0) //число, с которого происходит добавка формул в список
  const [isLast, setIsLast] = useState(false);
  //кастомный хук, который позволяет управлять состоянием данных с сервера (ошибка, загрузка)
  const { isFetching, isError } = useQuery(() => new Promise((resolve) => {
    //промис для выполнения асинхронной операции с искуственной задержкой
    setTimeout(() => {
      //отправка запроса
      resolve(agent.get(`/all_formulas?_start=${offset}&_limit=${REQEST_LIMIT}`).then(({ data }: AxiosResponse<Formula[]>) => {
        return data
      }))
    }, 1000)
  }), {
    keys: [offset], //зависимость от offset
    onSuccess: (formulasList: Formula[]) => {
      setFormulasList(prev => prev.concat(formulasList)) //изменение списка формул в случае успеха
      if (formulasList.length < REQEST_LIMIT) {
        setIsLast(true);
      }
    }
  });

  //кастомный хук, который позволяет следить за областью видимости
  const { ref } = useIntersectionObserver<HTMLDivElement>({ //ref - привязка к html-элементу
    threshold: 1, //объект виден полностью
    onChange: (entry) => {
      if (entry.isIntersecting) { //если виден
        setOffset((prev) => prev + REQEST_LIMIT) //меняем ofset(добавляем ещё формул в список)
      }
    }
  })
  if (isError) {
    return (
      <ContentWrapper>
        <div className="error">
          <p>Произошла ошибка. Попробуйте обновить страницу.</p>
        </div>
      </ContentWrapper>
    )
  }
  if (isFetching && !formulasList.length) {
    return (
      <ContentWrapper>
        <CardSkeletonList />
      </ContentWrapper>
    )
  }
  return (
    <ContentWrapper>
      {Boolean(formulasList.length) && <CardList formulas={formulasList} isLoading={isFetching} />}
      {!isLast && <div ref={ref} style={{ width: "100%", height: "1px" }} />}
    </ContentWrapper>
  );
}
