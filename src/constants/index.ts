import type { ClassTypes, TabTypes } from "@/types";

//ссылки для роутинга
export const ROOT_ROUTES = Object.freeze({
  addFormula: "/add_formula",
  testing: "/testing",
  class_7: "/class_7",
  class_8: "/class_8",
  class_9: "/class_9",
  repeating: "/repeating",
  main_page: "/main_page",
});

export const ClassesListNames: Record<ClassTypes, string> = {
  class_7: "7 класс",
  class_8: "8 класс",
  class_9: "9 класс",
};

export const TabListNames: Record<TabTypes, string> = {
  class_7: "7 класс",
  class_8: "8 класс",
  class_9: "9 класс",
  all: "Всё",
};
