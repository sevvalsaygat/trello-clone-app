import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { TasksApi } from "@api";
import type { ErrorResponse } from "@api";

function deleteTaskFn(id: string, axiosInstance: AxiosInstance) {
  const api = new TasksApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .deleteApiAuthenticatedTasksId(id)
    .then((response) => response.data);
}

export default function useDeleteTask(
  props: MutateOptions<unknown, AxiosError<ErrorResponse>, string>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useDeleteTask"],
    mutationFn: (id: string) => deleteTaskFn(id, axiosInstance),
    ...props,
  });
}
