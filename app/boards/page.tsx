"use client";

import React, { useEffect, useState } from "react";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

import { useAuth } from "@app/hooks";
import { AppLayout } from "@app/layouts";
import { BoardDetails, Icons } from "@app/components";

export default function Page() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);

  const [boardColumns, setBoardColumns] = useState([
    {
      title: "Backlog",
      tasks: ["Modal template YAPILACAK"],
    },
    {
      title: "To Do",
      tasks: ["Modal template YAPIL"],
    },
    {
      title: "Doing",
      tasks: ["Modal template YAP"],
    },
    {
      title: "Done",
      tasks: ["Modal template YAPSIN"],
    },
  ]);

  const boardColumnIds = boardColumns.map((boardColumn) => boardColumn.title);

  function handleDragEnd(event: DragEndEvent) {
    console.log("drag end called");
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const activeIndex = boardColumns.findIndex(
        (boardColumn) => boardColumn.title === active.id
      );
      const overIndex = boardColumns.findIndex(
        (boardColumn) => boardColumn.title === over.id
      );
      const newBoardColumnsState = arrayMove(
        boardColumns,
        activeIndex,
        overIndex
      );
      setBoardColumns(newBoardColumnsState);
    }
  }

  useEffect(() => {
    useAuth.persist.rehydrate();
  }, []);

  return (
    <AppLayout>
      <div className="dark-blue-background">
        <div className="flex flex-row">
          <BoardDetails.Sidebar />
          <React.Fragment>
            {isAuthenticated && (
              <div
                className="flex flex-col"
                style={{
                  width: "calc(100vw - 260px)",
                }}
              >
                <BoardDetails.Header />
                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex flex-row h-full overflow-x-auto">
                    <SortableContext
                      items={boardColumnIds}
                      strategy={horizontalListSortingStrategy}
                    >
                      {boardColumns.map((boardColumn) => (
                        <BoardDetails.BoardColumn
                          key={boardColumn.title}
                          title={boardColumn.title}
                          tasks={boardColumn.tasks}
                        />
                      ))}
                    </SortableContext>

                    <button className="flex flex-row items-center gap-2 mx-[6px] h-fit mt-3 p-3 bg-black-100 hover:bg-slate-650 rounded-xl w-[272px] transition-all duration-100">
                      <Icons.SvgPlus className="w-4 h-4 text-white" />
                      <div className="text-sm leading-5 font-medium text-white">
                        Add another list
                      </div>
                    </button>
                  </div>
                </DndContext>
              </div>
            )}
          </React.Fragment>
        </div>
      </div>
    </AppLayout>
  );
}
