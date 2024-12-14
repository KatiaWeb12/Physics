import { agent, ClassesDTO } from "@/api";
import { Formula } from "@/types";
import { AxiosResponse } from "axios";

let formulasList: Formula[] = [];
agent.get(`/class_7`).then(({ data }: AxiosResponse<ClassesDTO>) => {
   formulasList.push(...data.formulas)
})
agent.get(`/class_8`).then(({ data }: AxiosResponse<ClassesDTO>) => {
   formulasList.push(...data.formulas)
})
agent.get(`/class_9`).then(({ data }: AxiosResponse<ClassesDTO>) => {
   formulasList.push(...data.formulas)
})
export default formulasList