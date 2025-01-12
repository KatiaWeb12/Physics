import { useEffect, useState } from "react";
import { classActions, useAppDispatch, useAppSelector } from "@/redux";
import ClassesList from "@/components/ClassesList/ClassesList";
import { ClassTypes, Formula, Theme } from "@/types";
import { ContentWrapper } from "@/components";
import { agent } from "@/api";
import ClassThemesList from "../ClassPage/components/ClassThemesList";
import RepeatingSlider from "./components/RepeatingSlider/RepeatingSlider";

//Страница: повторение формул по карточкам
export default function RepeatingPage() {
  const { themes } = useAppSelector((state) => state.class);
  const [activeClass, setActiveClass] = useState<ClassTypes>();
  const [activeThemeId, setActiveThemeId] = useState<number>(0);
  const formulas = useAppSelector((state) => state.class.formulas.filter(formula => formula.themeId === Number(activeThemeId))).sort(() => Math.random() - 0.5)
  const dispatch = useAppDispatch()
  function setActiveThemeIdHandle(id: number) {
    setActiveThemeId(id)
  }
  function setActiveClassHandle(newValue: ClassTypes) {
    setActiveClass(newValue);
    setActiveThemeId(0);
  }
  useEffect(() => {
    async function getData() {
      try {
        const { data: formulas } = await agent.get<Formula[]>(`/all_formulas?classType=${activeClass}`);
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
    if (activeClass) {
      getData()
    }
  }, [activeClass]);
  return (
    <ContentWrapper>
      <ClassesList setActiveClass={setActiveClassHandle} activeClass={activeClass} />
      {Boolean(activeClass) && (
        <ClassThemesList
          setActiveThemeId={setActiveThemeIdHandle}
          activeThemeId={activeThemeId}
          themes={themes}
        />
      )}
      {Boolean(activeClass) && Boolean(activeThemeId) && <RepeatingSlider formulas={formulas} />}
    </ContentWrapper>
  );
}
