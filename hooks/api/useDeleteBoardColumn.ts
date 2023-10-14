import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardColumnsApi } from "@api";
import type { ErrorResponse } from "@api";

function deleteBoardColumnFn(id: string, axiosInstance: AxiosInstance) {
  const api = new BoardColumnsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .deleteApiAuthenticatedBoardColumnsId(id)
    .then((response) => response.data);
}

export default function useDeleteBoardColumn(
  props: MutateOptions<unknown, AxiosError<ErrorResponse>, string>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useDeleteBoardColumn"],
    mutationFn: (id: string) => deleteBoardColumnFn(id, axiosInstance),
    ...props,
  });
}
