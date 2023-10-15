import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardMembersApi } from "@api";
import type { UpdateBoardMember, BoardMember, ErrorResponse } from "@api";

function updateBoardMemberFn(
  id: string,
  updateBoardMember: UpdateBoardMember,
  axiosInstance: AxiosInstance
) {
  const api = new BoardMembersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .patchApiAuthenticatedBoardMembersId(id, updateBoardMember)
    .then((response) => response.data);
}

export default function useUpdateBoardMember(
  id: string,
  props: MutateOptions<
    BoardMember,
    AxiosError<ErrorResponse>,
    UpdateBoardMember
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useUpdateBoardMember", id],
    mutationFn: (updateBoardMember: UpdateBoardMember) =>
      updateBoardMemberFn(id, updateBoardMember, axiosInstance),
    ...props,
  });
}
