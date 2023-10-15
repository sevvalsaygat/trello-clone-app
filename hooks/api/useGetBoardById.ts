import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardsApi } from "@api";
import type { Board, ErrorResponse } from "@api";

type UseGetBoardByIdPropTypes = {
  id: string;
} & RelationType;

function getBoardByIdFn(
  axiosInstance: AxiosInstance,
  params: UseGetBoardByIdPropTypes
) {
  const api = new BoardsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedBoardsId(params.id, params.expand, params.embed)
    .then((response) => response.data);
}

export default function useGetBoardById(
  params: UseGetBoardByIdPropTypes,
  options?: UseQueryOptions<Board, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetBoardById", params.id],
    queryFn: () => getBoardByIdFn(axiosInstance, params),
    ...options,
  });
}
