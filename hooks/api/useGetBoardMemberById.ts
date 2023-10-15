import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardMembersApi } from "@api";
import type { BoardMember, ErrorResponse } from "@api";

type UseGetBoardMemberByIdPropTypes = {
  id: string;
} & RelationType;

function getBoardMemberByIdFn(
  axiosInstance: AxiosInstance,
  params: UseGetBoardMemberByIdPropTypes
) {
  const api = new BoardMembersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedBoardMembersId(params.id, params.expand, params.embed)
    .then((response) => response.data);
}

export default function useGetBoardMemberById(
  params: UseGetBoardMemberByIdPropTypes,
  options?: UseQueryOptions<BoardMember, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetBoardMemberById", params.id],
    queryFn: () => getBoardMemberByIdFn(axiosInstance, params),
    ...options,
  });
}
