type PhysicalQuantities = Record<string, string>
//типизация структуры формулы
export interface Formula {
  id: number;
  theme: string;
  image: string;
  description: string;
  physical_devices: string,
  title: string;
  physical_quantities: PhysicalQuantities;
}
//типизация структуры темы
export interface Theme {
  theme_id: number;
  theme_name: string;

}
