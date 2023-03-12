import { curry } from "../utils/functional";
import { state } from "../types";

export type addEvent = React.KeyboardEvent | React.MouseEvent;

const addCategory = curry((stateUsed: state, event: addEvent): void => {
  const [categories, setCategories] = stateUsed;
  let input: HTMLInputElement | null = null;

  if (event.type === "click") {
    input = document.querySelector(".input") as HTMLInputElement;
  }

  if (event.type === "keyup") {
    if ((event as React.KeyboardEvent).keyCode != 13) return;
    input = event.target as HTMLInputElement;
  }

  const category: string = input!.value;

  if (category.trim().length < 2) return;
  if (categories.includes(category)) return;

  input!.value = "";

  if (input != null) setCategories([...categories, category]);
});

export default addCategory;
