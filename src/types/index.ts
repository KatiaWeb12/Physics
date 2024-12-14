type PhysicalQuantities = Record<string, string>
//типизация структуры формулы
export interface Formula {
  id: number;
  themeId: number;
  image: string;
  description: string;
  physical_devices?: string,
  title: string;
  physical_quantities: PhysicalQuantities;
}
//типизация структуры темы
export interface Theme {
  themeId: number;
  themeName: string;

}
