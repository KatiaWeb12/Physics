import { useEffect } from "react";
import { type AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector, classActions } from "@/redux";
import { agent, ClassesDTO } from "@/api";
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
