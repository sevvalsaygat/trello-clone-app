"use client";

export default function Page({ params }: { params: { boardId: string } }) {
  return <div>Board Details: {params.boardId}</div>;
}
