import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { TasksApi } from "@api";
import type { UpdateTaskRequest, Task, ErrorResponse } from "@api";

function updateTaskFn(
  id: string,
  updateTaskRequest: UpdateTaskRequest,
  axiosInstance: AxiosInstance
) {
  const api = new TasksApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .patchApiAuthenticatedTasksId(id, updateTaskRequest)
    .then((response) => response.data);
}

export default function useUpdateTask(
  id: string,
  props: MutateOptions<Task, AxiosError<ErrorResponse>, UpdateTaskRequest>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useUpdateTask", id],
    mutationFn: (updateTaskRequest: UpdateTaskRequest) =>
      updateTaskFn(id, updateTaskRequest, axiosInstance),
    ...props,
  });
}
