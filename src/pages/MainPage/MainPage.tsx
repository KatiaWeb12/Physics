import { useEffect, useState } from "react";
import type { AxiosResponse } from "axios";
import { useIntersectionObserver } from '@siberiacancode/reactuse';
import { useQuery } from '@siberiacancode/reactuse';
import { agent } from "@/api";
import { CardList, ContentWrapper, CardSkeletonList, ErrorContent } from "@/components";
import type { Formula, Theme } from "@/types";
import { classActions, useAppDispatch } from "@/redux";

//Главная страница
//Количество карточек в порции
const REQEST_LIMIT = 10;
export default function MainPage() {
  const dispatch = useAppDispatch();
  //список формул
  const [formulasList, setFormulasList] = useState<Formula[]>([]);
  //число, с которого происходит добавка формул в список
  const [offset, setOffset] = useState(0)
  //переменная показывает: создан ли последний элемент из базы
  const [isLast, setIsLast] = useState(false);

  //Кастомный хук, который позволяет управлять состоянием данных с сервера (ошибка, загрузка)
  const { isFetching, isError } = useQuery(() => new Promise((resolve) => {
    //Промис для выполнения асинхронной операции с искуственной задержкой
    setTimeout(() => {
      //Отправка запроса для получения всех формул
      resolve(agent.get(`/all_formulas?_start=${offset}&_limit=${REQEST_LIMIT}`).then(({ data }: AxiosResponse<Formula[]>) => {
        return data
      }))
    }, 1000)
  }), {
    keys: [offset], //Зависимость от offset
    onSuccess: (formulasList: Formula[]) => {
      //Изменение списка формул в случае успеха
      setFormulasList(prev => prev.concat(formulasList))
      if (formulasList.length < REQEST_LIMIT) {
        setIsLast(true);
      }
    }
  });

  //Кастомный хук, который позволяет следить за областью видимости
  const { ref } = useIntersectionObserver<HTMLDivElement>({ //ref - привязка к html-элементу
    threshold: 1, //объект виден полностью
    onChange: (entry) => {
      if (entry.isIntersecting) { //если виден
        setOffset((prev) => prev + REQEST_LIMIT) //меняем ofset (добавляем ещё формул в список)
      }
    }
  })

  useEffect(() => {
    agent.get('/themes').then(({ data }: AxiosResponse<Theme[]>) => {
      dispatch(classActions.setThemes(data))
    })
    return () => {
      dispatch(classActions.resetData());
    }
  }, [dispatch])
  //если ошибка
  if (isError) {
    return (
      <ContentWrapper>
        <ErrorContent />
      </ContentWrapper>
    )
  }
  //если идёт стартовая загрузка и формул пока нет
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
