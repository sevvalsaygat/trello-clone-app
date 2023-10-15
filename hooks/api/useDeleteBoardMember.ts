import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardMembersApi } from "@api";
import type { ErrorResponse } from "@api";

function deleteBoardMemberFn(id: string, axiosInstance: AxiosInstance) {
  const api = new BoardMembersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .deleteApiAuthenticatedBoardMembersId(id)
    .then((response) => response.data);
}

export default function useDeleteBoardMember(
  props: MutateOptions<unknown, AxiosError<ErrorResponse>, string>
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useDeleteBoardMember"],
    mutationFn: (id: string) => deleteBoardMemberFn(id, axiosInstance),
    ...props,
  });
}
