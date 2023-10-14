import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardColumnsApi } from "@api";
import type { BoardColumnListResponse, ErrorResponse } from "@api";

type UseGetAllBoardColumnsPropTypes = {
  boardId?: string;
} & PaginationType &
  RelationType &
  SortingType &
  SearchType;

function getAllBoardColumnsFn(
  axiosInstance: AxiosInstance,
  params: UseGetAllBoardColumnsPropTypes
) {
  const api = new BoardColumnsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedBoardColumns(
      params.page,
      params.limit,
      params.expand,
      params.embed,
      params.q,
      params.boardId,
      params.sort,
      params.order
    )
    .then((response) => response.data);
}

export default function useGetAllBoardColumns(
  params: UseGetAllBoardColumnsPropTypes,
  options?: UseQueryOptions<BoardColumnListResponse, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetAllBoardColumns", params.page, params.limit],
    queryFn: () => getAllBoardColumnsFn(axiosInstance, params),
    ...options,
  });
}
