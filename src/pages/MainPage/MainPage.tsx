import type { AxiosResponse } from "axios";
import { type ClassesDTO, agent } from "@/api";
import { CardList } from "@/components";
import "./MainPage.css";
import { useEffect, useState } from "react";
import { Formula } from "@/types";

//Главная страница
const REQEST_LIMIT = 10;
export default function MainPage() {
  const [formulasList, setFormulasList] = useState<Formula[]>([]);
  useEffect(() => {
    agent.get(`/all_formulas?_start=${0}&_limit=${REQEST_LIMIT}`).then(({ data }: AxiosResponse<Formula[]>) => {
      setFormulasList(prev => prev.concat(data))
    });
  }, [])
  return (
    <>
      {Boolean(formulasList.length) && <CardList formulas={formulasList} />}
    </>
  );
}
