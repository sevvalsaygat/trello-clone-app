import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardsApi } from "@api";
import type { UpdateBoardRequest, Board, ErrorResponse } from "@api";

function updateBoardFn(
  id: string,
  updateBoardRequest: UpdateBoardRequest,
  axiosInstance: AxiosInstance
) {
  const api = new BoardsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .patchApiAuthenticatedBoardsId(id, updateBoardRequest)
    .then((response) => response.data);
}

export default function useUpdateBoard(
  id: string,
  props: MutateOptions<Board, AxiosError<ErrorResponse>, UpdateBoardRequest>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useUpdateBoard", id],
    mutationFn: (updateBoardRequest: UpdateBoardRequest) =>
      updateBoardFn(id, updateBoardRequest, axiosInstance),
    ...props,
  });
}
