// typescript теория

import { ReactNode, useState } from "react";
let age: number = 12;
let str: string = "hi";
let b: boolean = false;
let n: null = null;
let un: undefined = undefined;
let union: string | number = "25";
let arr: number[] = [1, 2];
let obj: Record<string, number> = {
  age: 5,
};
interface Person {
  name: string;
  age: number;
  hasPet: boolean;
  attractions: string[];
  nickname?: string;
}
let obj2: Person = {
  name: "Kate",
  age: 25,
  hasPet: false,
  attractions: ["park"],
  nickname: "kate",
};
// console.log(obj2.name.length, obj2.nickname?.toUpperCase());

function sumNums(a: number, b: number): number {
  return a + b;
}
function log(s: string) {
  console.log(s);
}
interface Props {
  onClickHandle: () => void;
  variant?: string;
  children: ReactNode;
}
function fu(arg: number | string) {
  if (typeof arg === "string") {
    console.log(arg.includes("x"));
  } else {
    console.log(arg.toFixed(2));
  }
  console.log((arg as string).includes("x"));
}
export default function Test({
  onClickHandle,
  children,
  variant = "red",
}: Props) {
  let [disable, setDisable] = useState(false);
  let [userList, setUserList] = useState<Person[]>([]);
  let user;

  return (
    <button onClick={onClickHandle} className={variant}>
      {children}
    </button>
  );
}
