import type { AxiosResponse } from "axios";
import { agent } from "@/api";
import { CardList, ContentWrapper } from "@/components";
import "./MainPage.css";
import { useState } from "react";
import { Formula } from "@/types";
import { useQuery } from '@siberiacancode/reactuse';
import { useIntersectionObserver } from '@siberiacancode/reactuse';
import CardSkeletonList from "@/components/Card/CardSkeletonList";

//Главная страница
const REQEST_LIMIT = 10;
export default function MainPage() {
  const [formulasList, setFormulasList] = useState<Formula[]>([]);
  const [offset, setOffset] = useState<number>(0) //число, с которого происходит добавка формул в список
  //кастомный хук, который позволяет управлять состоянием данных с сервера (ошибка, загрузка)
  const { isLoading, isError } = useQuery(() => new Promise((resolve) => {
    //промис для обработки ассинхронной операции
    setTimeout(() => {
      //отправка запроса
      resolve(agent.get(`/all_formulas?_start=${offset}&_limit=${REQEST_LIMIT}`).then(({ data }: AxiosResponse<Formula[]>) => {
        return data
      }))
    }, 1000)
  }), {
    keys: [offset], //зависимость от ofset
    onSuccess: (formulasList: Formula[]) => {
      setFormulasList(prev => prev.concat(formulasList)) //изменение списка формул в случае успеха
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
  if (isLoading) {
    return (
      <ContentWrapper>
        <CardSkeletonList formulaListLength={formulasList.length + REQEST_LIMIT} />
      </ContentWrapper>
    )
  }
  return (
    <ContentWrapper>
      {Boolean(formulasList.length) && <CardList formulas={formulasList} />}
      <div ref={ref} style={{ width: "100%", height: "1px" }}></div>
    </ContentWrapper>
  );
}
