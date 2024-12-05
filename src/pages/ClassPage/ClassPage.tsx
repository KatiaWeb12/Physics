import { useEffect } from "react";
import { type AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector, classActions } from "@/redux";
import { agent, ClassesDTO } from "@/api";
import { ContentWrapper } from "@/components";
import ClassThemesList from "./components/ClassThemesList";
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
  //ClassesDTO - типизация класса
  //AxiosResponse - типизация ответа get-запроса (then)
  useEffect(() => {
    agent.get(`/${classType}`).then(({ data }: AxiosResponse<ClassesDTO>) => {
      dispatch(classActions.getData(data));
    });
  }, [classType, dispatch]);

  return (
    <ContentWrapper>
      <h4 className="class_header">{HeaderMap[classType]}</h4>
      <ClassThemesList themes={themes} />
    </ContentWrapper>
  );
}
