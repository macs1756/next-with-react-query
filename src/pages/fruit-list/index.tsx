import React, { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";


const FruitList = () => {
  const [items, setItems] = useState(["🍎 Apple", "🍌 Banana", "🍒 Cherry"]);
  const listRef = useRef(null);

  const fruitBasket = useRef([
    "🍓 Strawberry",
    "🥥 Coconut",
    "🥝 Kiwi",
    "🍇 Grape",
    "🍉 Watermelon",
    "🍍 Pineapple",
    "🍐 Pear",
    "🍑 Peach",
    "🫐 Blueberry",
    "🍊 Orange",
    "🥭 Mango",
  ]);

  const remove = (item: any) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((fruit) => {
        if (fruit === item) {
          fruitBasket.current.push(fruit);
          return false;
        }
        return true;
      });
      return updatedItems;
    });
  };

  const add = () => {
    if (fruitBasket.current.length) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const randomIndex = Math.floor(Math.random() * newItems.length);
        newItems.splice(randomIndex, 0, fruitBasket.current.shift() ?? "");
        return newItems;
      });
    } else {
      alert("Out of fruit!");
    }
  };

  const randomize = () => {
    setItems((prevItems) => {
      const shuffledItems = [...prevItems].sort(() =>
        Math.random() > 0.5 ? 1 : -1
      );
      return shuffledItems;
    });
  };

  useEffect(() => {
    if (listRef.current) {
      autoAnimate(listRef.current);
    }
  }, [listRef]);

  return (
    <div className="example list-example">
      <ul ref={listRef}>
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <button onClick={() => remove(item)} aria-label="Remove Fruit">
              <svg
                data-v-3b45f6c3=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                x="0px"
                y="0px"
              >
                <path d="M27.19,7.64a2,2,0,1,0-2.83-2.83l-6.95,6.95a2,2,0,0,1-2.83,0L7.64,4.81A2,2,0,0,0,4.81,7.64l6.95,6.95a2,2,0,0,1,0,2.83L4.81,24.36a2,2,0,1,0,2.83,2.83l6.95-6.95a2,2,0,0,1,2.83,0l6.95,6.95a2,2,0,1,0,2.83-2.83l-6.95-6.95a2,2,0,0,1,0-2.83Z"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-[12px]">
        <button className="button button--add button--alt" onClick={add}>
          Add Fruit
        </button>
        <button
          className="button button--random button--alt"
          onClick={randomize}
        >
          Randomize
        </button>
      </div>
    </div>
  );
};

export default FruitList;
