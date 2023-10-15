import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardMembersApi } from "@api";
import type { BoardMemberListResponse, ErrorResponse } from "@api";

type UseGetAllBoardMembersPropTypes = {
  boardId?: string;
  userId?: string;
} & PaginationType &
  RelationType &
  SortingType &
  SearchType;

function getAllBoardMembersFn(
  axiosInstance: AxiosInstance,
  params: UseGetAllBoardMembersPropTypes
) {
  const api = new BoardMembersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedBoardMembers(
      params.page,
      params.limit,
      params.expand,
      params.embed,
      params.q,
      params.boardId,
      params.userId,
      params.sort,
      params.order
    )
    .then((response) => response.data);
}

export default function useGetAllBoardMembers(
  params: UseGetAllBoardMembersPropTypes,
  options?: UseQueryOptions<BoardMemberListResponse, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetAllBoardMembers", params.page, params.limit],
    queryFn: () => getAllBoardMembersFn(axiosInstance, params),
    ...options,
  });
}
