import { useEffect, useState } from "react";
import { classActions, useAppDispatch, useAppSelector } from "@/redux";
import { Formula, Theme } from "@/types";
import { ContentWrapper } from "@/components";
import { agent } from "@/api";
import ClassThemesList from "../ClassPage/components/ClassThemesList";
import RepeatingSlider from "./components/RepeatingSlider/RepeatingSlider";
import Tabs from "@/components/Tabs/Tabs";
import Statistics from "./components/Statistics/Statistics"

// Страница: повторение формул по карточкам
export default function RepeatingPage() {
  // темы
  const { themes } = useAppSelector((state) => state.class);
  // активный класс
  const [activeClass, setActiveClass] = useState<string>();
  // активная тема
  const [activeThemeId, setActiveThemeId] = useState<number>(0);
  // формулы
  const formulas = useAppSelector((state) => state.class.formulas.filter(formula => formula.themeId === Number(activeThemeId))).sort(() => Math.random() - 0.5)
  const [formulasForReating, setFormulasForReating] = useState<string[]>([])
  const dispatch = useAppDispatch()
  // функция изменения класса
  function setActiveClassHandle(newValue: string) {
    setActiveClass(newValue);
    setActiveThemeId(0);
  }
  // функция изменения темы
  function setActiveThemeIdHandle(id: number) {
    setActiveThemeId(id)
  }
  useEffect(() => {
    async function getData() {
      try {
        // получение формул
        const { data: formulas } = await agent.get<Formula[]>(`/all_formulas?classType=${activeClass}`);
        // получение тем
        const { data: themes } = await agent.get<Theme[]>(`/themes?classType=${activeClass}`);
        dispatch(classActions.getData({
          formulas,
          themes,
        }))
      }
      catch (err) {
        console.info(err);
      }
    }
    // если класс поменялся, сбрасываем данные
    if (activeClass) {
      getData()
    }
  }, [activeClass, dispatch]);
  return (
    <ContentWrapper>
      <Tabs setActiveTab={setActiveClassHandle} activeTab={activeClass} all={false} />
      {Boolean(activeClass) && (
        <ClassThemesList
          setActiveThemeId={setActiveThemeIdHandle}
          activeThemeId={activeThemeId}
          themes={themes}
        />
      )}
      {Boolean(activeClass) && Boolean(activeThemeId) && <RepeatingSlider formulas={formulas} setFormulasForReating={setFormulasForReating} />}
      {Boolean(activeThemeId) && Boolean(formulasForReating.length) && <Statistics list={formulasForReating} />}
    </ContentWrapper>
  );
}
