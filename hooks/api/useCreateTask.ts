import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { TasksApi } from "@api";
import type { CreateTaskRequest, Task, ErrorResponse } from "@api";

function createTaskFn(
  createTaskRequest: CreateTaskRequest,
  axiosInstance: AxiosInstance
) {
  const api = new TasksApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .postApiAuthenticatedTasks(createTaskRequest)
    .then((response) => response.data);
}

export default function useCreateTask(
  props: MutateOptions<Task, AxiosError<ErrorResponse>, CreateTaskRequest>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useCreateTask"],
    mutationFn: (createTaskRequest: CreateTaskRequest) =>
      createTaskFn(createTaskRequest, axiosInstance),
    ...props,
  });
}
