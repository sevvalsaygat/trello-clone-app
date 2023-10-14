import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardsApi } from "@api";
import type { BoardListResponse, ErrorResponse } from "@api";

type UseGetAllBoardsPropTypes = {
  userId?: string;
} & PaginationType &
  RelationType &
  SortingType &
  SearchType;

function getAllBoardsFn(
  axiosInstance: AxiosInstance,
  params: UseGetAllBoardsPropTypes
) {
  const api = new BoardsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedBoards(
      params.page,
      params.limit,
      params.expand,
      params.embed,
      params.q,
      params.userId,
      params.sort,
      params.order
    )
    .then((response) => response.data);
}

export default function useGetAllBoards(
  params: UseGetAllBoardsPropTypes,
  options?: UseQueryOptions<BoardListResponse, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetAllBoards", params.page, params.limit],
    queryFn: () => getAllBoardsFn(axiosInstance, params),
    ...options,
  });
}
