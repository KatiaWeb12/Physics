import { Route, Routes } from "react-router-dom";
import RoutePage from "../pages/MainPage/MainPage";
import AddFormulaPage from "../pages/AddFormulaPage/AddFormulaPage";
import TestingPage from "../pages/TestingPage/TestingPage";
import ClassPage from "../pages/ClassPage/ClassPage";
import RepeatingPage from "../pages/RepeatingPage/RepeatingPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { ROOT_ROUTES } from "../constants";
import {Layout} from "@/components";
import MainPage from "../pages/MainPage/MainPage";

export default function RootRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<RoutePage />} />
        <Route path={ROOT_ROUTES.addFormula} element={<AddFormulaPage />} />
        <Route path={ROOT_ROUTES.testing} element={<TestingPage />} />
        <Route
          path={ROOT_ROUTES.class_7}
          element={<ClassPage classType="class_7" />}
        />
        <Route
          path={ROOT_ROUTES.class_8}
          element={<ClassPage classType="class_8" />}
        />
        <Route
          path={ROOT_ROUTES.class_9}
          element={<ClassPage classType="class_9" />}
        />
        <Route path={ROOT_ROUTES.repeating} element={<RepeatingPage />} />
        <Route path={ROOT_ROUTES.main_page} element={<MainPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
