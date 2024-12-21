import "./RepeatingPage.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ContentWrapper } from "@/components";
import { useEffect, useState } from "react";
import ClassesList from "@/components/ClassesList/ClassesList";
import ClassThemesList from "../ClassPage/components/ClassThemesList";
import { classActions, useAppDispatch, useAppSelector } from "@/redux";
import { agent, ClassesDTO } from "@/api";
import { AxiosResponse } from "axios";
import RepeatingCont from "./components/RepeatingCont/RepeatingCont";

//Страница: повторение формул по карточкам
export default function RepeatingPage() {
  const { themes } = useAppSelector((state) => state.class);
  const [activeClass, setActiveClass] = useState<string>('')
  const [activeThemeId, setActiveThemeId] = useState<number>(-1);
  const formulas = useAppSelector((state) => state.class.formulas.filter(formula => formula.themeId === Number(activeThemeId)))
  const dispatch = useAppDispatch()
  function setActiveThemeIdHandle(id: number) {
    setActiveThemeId(id)
  }
  useEffect(() => {
    if(activeClass){
      agent.get(`/${activeClass}`).then(({ data }: AxiosResponse<ClassesDTO>) => {
        dispatch(classActions.getData(data));
      })
    }
  }, [activeClass, dispatch]);
  return (
    <ContentWrapper>
      <ClassesList setActiveClass={setActiveClass} activeClass={activeClass} />
      {Boolean(activeClass) && <ClassThemesList themes={themes} setActiveThemeId={setActiveThemeIdHandle} activeThemeId={activeThemeId} />}
      {(activeClass && activeThemeId >= 0) && <RepeatingCont formulas={formulas}/>}
    </ContentWrapper>
  );
}
