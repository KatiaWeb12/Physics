import { useEffect, useState } from "react";
import "./ClassPage.css";
import { agent, ClassesDTO } from "../../api";
import { type AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { classActions } from "../../redux/slices/classSlice";
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
  const dispatch = useDispatch();
  const { themes } = useAppSelector((state) => state.class);
  useEffect(() => {
    agent.get(`/${classType}`).then(({ data }: AxiosResponse<ClassesDTO>) => {
      dispatch(classActions.getData(data));
    });
  }, [classType]);

  return (
    <div className="class_page">
      <h4>{HeaderMap[classType]}</h4>
      <div className="class_topics">
        {themes.map((theme, key) => {
          return (
            <div className="topic_cont_class" key={key}>
              <a className="class_theme" href="\">
                {theme}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}