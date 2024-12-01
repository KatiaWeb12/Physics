import { Formula } from "../../types";

export interface ClassSchema {
   themes: string[];
   formulas: Formula[];
 }

export interface StoreSchema{
   class: ClassSchema;
}