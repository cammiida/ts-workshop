import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Person.module.css";

// type PersonProps = {

// }
/* React.FC<PersonProps> */

// generiske typer
const sort = <T,>(a: T, b: T) => {
  return a > b;
};

sort(1, 2);
// sort(1, "two"); // wrong
sort("one", "two");

// basic types
// string
// number
// object
// boolean
// array: string[]: ['one', 'two']
// array med flere typer: (number | string)[]. Ex: [1, 'one']
// tuple: [string, number] = ['one', 2], // wrong! [1, 'two']
// enums: enum Color {blue, green, yellow}
type Color = "blue" | "green" | "yellow";

interface IColor {}

type OtherColor = "purple" | "turquoise";

type AnyColor = Color | OtherColor;

type Animal = {
  legs: number;
  visibleTail: boolean;
};

type Food = "wet" | "dry";

type Dog = Animal & {
  bark: (times: number) => void;
  eat: (food: Food) => void;
};

const tequila: Dog = {
  legs: 4,
  visibleTail: true,
  bark(times) {
    for (let index = 0; index < times; index++) {
      console.log("voff");
    }
  },
  eat(food) {
    switch (food) {
      case "wet":
        console.log("nomnom");
        break;
      case "dry":
        console.log("crunchcruch");
        break;
      default:
        this.bark(20);
        break;
    }
  },
};

const favoriteColor: Color = "blue";

type PersonProps = PropsWithChildren<{
  name: string;
  age: number;
  favoriteColor?: Color;
}>;

const Person = (props: PersonProps) => {
  const { children } = props;

  return (
    <div className={styles.card}>
      {Object.entries(props).map(([key, value], index) => {
        return (
          <>
            {index !== 0 && "---"}
            <p>
              {key}: {value}
            </p>
          </>
        );
      })}

      {/* <p>Name: {name}</p>
      <p>Age: {age}</p>
      {!!favoriteColor && <p>Favorite color: {favoriteColor}</p>} */}
      {children}
    </div>
  );
};

export default Person;
