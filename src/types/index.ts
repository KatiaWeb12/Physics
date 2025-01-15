type PhysicalQuantities = Record<string, string>;
//типизация структуры формулы
export interface Formula {
  id: number;
  themeId: number;
  classType: ClassTypes;
  image: string;
  description: string;
  physical_devices?: string;
  title: string;
  physical_quantities: PhysicalQuantities;
}
//типизация структуры темы
export interface Theme {
  themeId: number;
  themeName: string;
}

//типизация структуры тестового задания
export interface TestingTask {
  testId: number;
  classType: ClassTypes;
  question: string;
  testImage?: string;
  correctAnswer: string;
}

export type ClassTypes = "class_7" | "class_8" | "class_9";
export type TabTypes = ClassTypes | "all";
