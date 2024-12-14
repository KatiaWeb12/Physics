import { CardList } from "@/components";
import "./MainPage.css";
import formulasList from "@/constants/allFormulas";

//Главная страница
export default function MainPage() {
  return (
    <>
      <CardList formulas={formulasList} />
    </>
  );
}
