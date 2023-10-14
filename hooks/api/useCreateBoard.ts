import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardsApi } from "@api";
import type { CreateBoardRequest, Board, ErrorResponse } from "@api";

function createBoardFn(
  createBoardRequest: CreateBoardRequest,
  axiosInstance: AxiosInstance
) {
  const api = new BoardsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .postApiAuthenticatedBoards(createBoardRequest)
    .then((response) => response.data);
}

export default function useCreateBoard(
  props: MutateOptions<Board, AxiosError<ErrorResponse>, CreateBoardRequest>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useCreateBoard"],
    mutationFn: (createBoardRequest: CreateBoardRequest) =>
      createBoardFn(createBoardRequest, axiosInstance),
    ...props,
  });
}
