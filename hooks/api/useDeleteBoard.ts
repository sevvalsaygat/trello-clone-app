import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardsApi } from "@api";
import type { ErrorResponse } from "@api";

function deleteBoardFn(id: string, axiosInstance: AxiosInstance) {
  const api = new BoardsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .deleteApiAuthenticatedBoardsId(id)
    .then((response) => response.data);
}

export default function useDeleteBoard(
  props: MutateOptions<unknown, AxiosError<ErrorResponse>, string>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useDeleteBoard"],
    mutationFn: (id: string) => deleteBoardFn(id, axiosInstance),
    ...props,
  });
}
