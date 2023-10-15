import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { TasksApi } from "@api";
import type { Task, ErrorResponse } from "@api";

type UseGetTaskByIdPropTypes = {
  id: string;
} & RelationType;

function getTaskByIdFn(
  axiosInstance: AxiosInstance,
  params: UseGetTaskByIdPropTypes
) {
  const api = new TasksApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedTasksId(params.id, params.expand, params.embed)
    .then((response) => response.data);
}

export default function useGetTaskById(
  params: UseGetTaskByIdPropTypes,
  options?: UseQueryOptions<Task, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetTaskById", params.id],
    queryFn: () => getTaskByIdFn(axiosInstance, params),
    ...options,
  });
}
