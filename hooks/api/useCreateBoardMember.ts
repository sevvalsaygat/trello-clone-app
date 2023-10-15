import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardMembersApi } from "@api";
import type { CreateBoardMember, BoardMember, ErrorResponse } from "@api";

function createBoardMemberFn(
  createBoardMember: CreateBoardMember,
  axiosInstance: AxiosInstance
) {
  const api = new BoardMembersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .postApiAuthenticatedBoardMembers(createBoardMember)
    .then((response) => response.data);
}

export default function useCreateBoardMember(
  props: MutateOptions<
    BoardMember,
    AxiosError<ErrorResponse>,
    CreateBoardMember
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useCreateBoardMember"],
    mutationFn: (createBoardMember: CreateBoardMember) =>
      createBoardMemberFn(createBoardMember, axiosInstance),
    ...props,
  });
}
