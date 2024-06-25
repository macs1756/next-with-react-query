import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "./card";
import autoAnimate from "@formkit/auto-animate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

 const Container: React.FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Write a cool JS library",
      },
      {
        id: 2,
        text: "Make it generic enough",
      },
      {
        id: 3,
        text: "Write README",
      },
      {
        id: 4,
        text: "Create some examples",
      },
      {
        id: 5,
        text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      },
      {
        id: 6,
        text: "???",
      },
      {
        id: 7,
        text: "PROFIT",
      },
    ]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        );
      }, [moveCard]
    );
     
     const parent = useRef(null);

     useEffect(() => {
       parent.current &&
         autoAnimate(parent.current, {
           duration: 200,
         });
     }, [parent]);

     return (
       <div>
         <DndProvider backend={HTML5Backend}>
           <div style={style} ref={parent}>
             {cards.map((card, i) => renderCard(card, i))}
           </div>
         </DndProvider>
       </div>
     );
  }
};


export default Container;