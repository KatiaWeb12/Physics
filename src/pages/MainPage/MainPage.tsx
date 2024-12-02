import { CardList } from "@/components";
import "./MainPage.css";
import { classActions, useAppDispatch, useAppSelector } from "@/redux";
import { agent, ClassesDTO } from "@/api";
import { useEffect } from "react";
import { AxiosResponse } from "axios";

export default function MainPage() {
  //Главная страница
  return (
    <CardList/>
  );
}
