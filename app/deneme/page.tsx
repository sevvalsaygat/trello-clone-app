"use client";

import { useState } from "react";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

type DenemePropTypes = {};

const Deneme: React.FC<DenemePropTypes> = () => {
  const [languages, setLanguages] = useState([
    "JavaScript",
    "Python",
    "TypeScript",
  ]);
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex flex-row items-center align-center justify-center p-3 text-2xl">
        <h3 className="text-red-500 mb-5">the best programing languages!</h3>
        <SortableContext
          items={languages}
          strategy={horizontalListSortingStrategy}
        >
          {languages.map((language) => (
            <SortableItem key={language} id={language}></SortableItem>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
  function handleDragEnd(event: DragEndEvent) {
    console.log("drag end called");
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const activeIndex = languages.indexOf(String(active.id));
      const overIndex = languages.indexOf(String(over.id));
      const newLanguagesState = arrayMove(languages, activeIndex, overIndex);
      setLanguages(newLanguagesState);
    }
  }
};

export default Deneme;
