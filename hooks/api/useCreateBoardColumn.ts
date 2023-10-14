import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardColumnsApi } from "@api";
import type {
  CreateBoardColumnRequest,
  BoardColumn,
  ErrorResponse,
} from "@api";

function createBoardColumnFn(
  createBoardColumnRequest: CreateBoardColumnRequest,
  axiosInstance: AxiosInstance
) {
  const api = new BoardColumnsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .postApiAuthenticatedBoardColumns(createBoardColumnRequest)
    .then((response) => response.data);
}

export default function useCreateBoardColumn(
  props: MutateOptions<
    BoardColumn,
    AxiosError<ErrorResponse>,
    CreateBoardColumnRequest
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useCreateBoardColumn"],
    mutationFn: (createBoardColumnRequest: CreateBoardColumnRequest) =>
      createBoardColumnFn(createBoardColumnRequest, axiosInstance),
    ...props,
  });
}
