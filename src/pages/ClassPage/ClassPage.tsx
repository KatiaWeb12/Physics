import { useEffect, useState } from "react";
import { classActions, useAppDispatch, useAppSelector } from "@/redux";
import { ContentWrapper, ErrorContent } from "@/components";
import type { Formula, Theme } from "@/types";
import { agent } from "@/api";
import ClassThemesList from "./components/ClassThemesList";
import FormulaList from "./components/FormulaList";
import "./ClassPage.css";

//типизация пропса -> тип класса
interface Props {
  classType: ClassTypes;
}
type ClassTypes = "class_7" | "class_8" | "class_9";

const HeaderMap: Record<ClassTypes, string> = {
  class_7: "7 класс",
  class_8: "8 класс",
  class_9: "9 класс",
};

//Страница: формулы по классу
export default function ClassPage({ classType }: Props) {
  const dispatch = useAppDispatch();
  const { themes } = useAppSelector((state) => state.class);
  const [activeThemeId, setActiveThemeId] = useState<number>(0);
  const [error, setError] = useState(false);
  //функция, меняющая активное id
  function setActiveThemeIdHandle(id: number) {
    setActiveThemeId(id)
  }
  // конструкция async await - удобная конструкция для получения response
  useEffect(() => {
    async function getData() {
      try {
        const { data: formulas } = await agent.get<Formula[]>(`/all_formulas?classType=${classType}`);
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
  }, [classType]);
  if (error) {
    return <ContentWrapper>
      <ErrorContent />
    </ContentWrapper>
  }
  return (
    <ContentWrapper>
      <h4 className="class_header">{HeaderMap[classType]}</h4>
      <ClassThemesList themes={themes} setActiveThemeId={setActiveThemeIdHandle} activeThemeId={activeThemeId} />
      {
        Boolean(activeThemeId) && <FormulaList themeId={activeThemeId} />
      }
    </ContentWrapper>
  );
}
