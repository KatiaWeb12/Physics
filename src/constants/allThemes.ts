import { agent, ClassesDTO } from "@/api";
import { Theme } from "@/types";
import { AxiosResponse } from "axios";

let themesList: Theme[] = [];
agent.get(`/class_7`).then(({ data }: AxiosResponse<ClassesDTO>) => {
   themesList.push(...data.themes)
})
agent.get(`/class_8`).then(({ data }: AxiosResponse<ClassesDTO>) => {
   themesList.push(...data.themes)
})
agent.get(`/class_9`).then(({ data }: AxiosResponse<ClassesDTO>) => {
   themesList.push(...data.themes)
})
export default themesList;