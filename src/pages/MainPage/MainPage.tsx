import type { AxiosResponse } from "axios";
import { agent } from "@/api";
import { CardList, ContentWrapper } from "@/components";
import "./MainPage.css";
import { useState } from "react";
import { Formula } from "@/types";
import { useQuery } from '@siberiacancode/reactuse';
import CardSkeleton from "@/components/Card/CardSkeleton";
import { useIntersectionObserver } from '@siberiacancode/reactuse';

//Главная страница
const REQEST_LIMIT = 10;
export default function MainPage() {
  const [formulasList, setFormulasList] = useState<Formula[]>([]);
  const [offset, setOffset] = useState<number>(0)
  //кастомный хук
  const { isLoading, isError } = useQuery(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve(agent.get(`/all_formulas?_start=${offset}&_limit=${REQEST_LIMIT}`).then(({ data }: AxiosResponse<Formula[]>) => {
        return data
      }))
    }, 1000)
  }), {
    keys: [offset],
    onSuccess: (formulasList: Formula[]) => {
      setFormulasList(prev => prev.concat(formulasList))
    }
  });
  const { ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 1,
    onChange: (entry) => {
      if (entry.isIntersecting) {
        setOffset((prev) => prev + REQEST_LIMIT)
      }
    }
  })
  if (isError) {
    return (
      <ContentWrapper>
        <p>Произошла ошибка. Попробуйте обновить страницу.</p>
      </ContentWrapper>
    )
  }
  if (isLoading && !formulasList.length) {
    return (
      <ContentWrapper>
        <CardSkeleton />
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
