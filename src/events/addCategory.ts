import { curry } from "../utils/functional";

export type addEvent = React.KeyboardEvent | React.MouseEvent;

const addCategory = curry((stateUsed: any, event: addEvent): void => {
  const [categories, setCategories, setPrimary] = stateUsed;
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
  if (categories[category]) return;

  input!.value = "";

  if (input != null) {
    setCategories({
      ...categories,
      [category]:[]
    });
    setPrimary(category)
  }
});

export default addCategory;
