type PhysicalQuantities = Record<string, string>

export interface Formula {
  id: number;
  theme: string;
  image: string;
  title: string;
  physical_quantities: PhysicalQuantities;
}
