import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { UsersApi } from "@api";
import type { UserListResponse, ErrorResponse } from "@api";

type UseGetAllUsersPropTypes = PaginationType &
  RelationType &
  SortingType &
  SearchType;

function getAllUsersFn(
  axiosInstance: AxiosInstance,
  params: UseGetAllUsersPropTypes
) {
  const api = new UsersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedUsers(
      params.page,
      params.limit,
      params.expand,
      params.embed,
      params.q,
      params.sort,
      params.order
    )
    .then((response) => response.data);
}

export default function useGetAllUsers(
  params: UseGetAllUsersPropTypes,
  options?: UseQueryOptions<UserListResponse, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetAllUsers", params.page, params.limit],
    queryFn: () => getAllUsersFn(axiosInstance, params),
    ...options,
  });
}
