import { useEffect, useState } from "react";
import { classActions, useAppDispatch, useAppSelector } from "@/redux";
import { ContentWrapper, ErrorContent } from "@/components";
import type { ClassTypes, Formula, Theme } from "@/types";
import { ClassesListNames } from "@/constants";
import { agent } from "@/api";
import ClassThemesList from "./components/ClassThemesList";
import FormulaList from "./components/FormulaList";
import "./ClassPage.css";

//типизация пропса -> тип класса
interface Props {
  classType: ClassTypes;
}

// Страница: формулы по классу
export default function ClassPage({ classType }: Props) {
  const dispatch = useAppDispatch();
  // темы
  const { themes } = useAppSelector((state) => state.class);
  //активная тема
  const [activeThemeId, setActiveThemeId] = useState<number>(0);
  // ошибка
  const [error, setError] = useState(false);
  // функция, меняющая активное id
  function setActiveThemeIdHandle(id: number) {
    setActiveThemeId(id)
  }
  // конструкция async await - удобная конструкция для получения response
  useEffect(() => {
    async function getData() {
      try {
        // получение формул
        const { data: formulas } = await agent.get<Formula[]>(`/all_formulas?classType=${classType}`);
        // получение тем
        const { data: themes } = await agent.get<Theme[]>(`/themes?classType=${classType}`);
        dispatch(classActions.getData({
          formulas,
          themes,
        }))
      }
      catch (err) {
        setError(true);
      }
    }
    getData()
  }, [classType, dispatch]);
  if (error) {
    return <ContentWrapper>
      <ErrorContent />
    </ContentWrapper>
  }
  return (
    <ContentWrapper>
      <h4 className="class_header">{ClassesListNames[classType]}</h4>
      <ClassThemesList themes={themes} setActiveThemeId={setActiveThemeIdHandle} activeThemeId={activeThemeId} />
      {
        Boolean(activeThemeId) && <FormulaList themeId={activeThemeId} />
      }
    </ContentWrapper>
  );
}
