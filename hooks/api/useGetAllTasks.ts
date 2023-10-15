import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { TasksApi } from "@api";
import type { TaskListResponse, ErrorResponse } from "@api";

type UseGetAllTasksPropTypes = {
  boardMemberId?: string;
  boardColumnId?: string;
} & PaginationType &
  RelationType &
  SortingType &
  SearchType;

function getAllTasksFn(
  axiosInstance: AxiosInstance,
  params: UseGetAllTasksPropTypes
) {
  const api = new TasksApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedTasks(
      params.page,
      params.limit,
      params.expand,
      params.embed,
      params.q,
      params.boardMemberId,
      params.boardColumnId,
      params.sort,
      params.order
    )
    .then((response) => response.data);
}

export default function useGetAllTasks(
  params: UseGetAllTasksPropTypes,
  options?: UseQueryOptions<TaskListResponse, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetAllTasks", params.page, params.limit],
    queryFn: () => getAllTasksFn(axiosInstance, params),
    ...options,
  });
}
