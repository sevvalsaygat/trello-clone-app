import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardColumnsApi } from "@api";
import type {
  UpdateBoardColumnRequest,
  BoardColumn,
  ErrorResponse,
} from "@api";

function updateBoardColumnFn(
  id: string,
  updateBoardColumnRequest: UpdateBoardColumnRequest,
  axiosInstance: AxiosInstance
) {
  const api = new BoardColumnsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .patchApiAuthenticatedBoardColumnsId(id, updateBoardColumnRequest)
    .then((response) => response.data);
}

export default function useUpdateBoardColumn(
  id: string,
  props: MutateOptions<
    BoardColumn,
    AxiosError<ErrorResponse>,
    UpdateBoardColumnRequest
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useUpdateBoardColumn", id],
    mutationFn: (updateBoardColumnRequest: UpdateBoardColumnRequest) =>
      updateBoardColumnFn(id, updateBoardColumnRequest, axiosInstance),
    ...props,
  });
}
