import { useEffect } from "react";
import { type AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector, classActions } from "@/redux";
import { agent, ClassesDTO } from "@/api";
import { ContentWrapper } from "@/components";
import ClassThemesList from "./components/ClassThemesList";
import "./ClassPage.css";

interface Props {
  classType: ClassTypes;
}
type ClassTypes = "class_7" | "class_8" | "class_9";

const HeaderMap: Record<ClassTypes, string> = {
  class_7: "7 класс",
  class_8: "8 класс",
  class_9: "9 класс",
};
export default function ClassPage({ classType }: Props) {
  const dispatch = useAppDispatch();
  const { themes } = useAppSelector((state) => state.class);

  useEffect(() => {
    agent.get(`/${classType}`).then(({ data }: AxiosResponse<ClassesDTO>) => {
      dispatch(classActions.getData(data));
    });
  }, [classType]);

  return (
    <ContentWrapper>
      <h4 className="class_header">{HeaderMap[classType]}</h4>
      <ClassThemesList themes={themes} />
    </ContentWrapper>
  );
}
