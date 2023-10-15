import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { UsersApi } from "@api";
import type { User, ErrorResponse } from "@api";

type UseGetUserByIdPropTypes = {
  id: string;
} & RelationType;

function getUserByIdFn(
  axiosInstance: AxiosInstance,
  params: UseGetUserByIdPropTypes
) {
  const api = new UsersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedUsersId(params.id, params.expand, params.embed)
    .then((response) => response.data);
}

export default function useGetUserById(
  params: UseGetUserByIdPropTypes,
  options?: UseQueryOptions<User, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetUserById", params.id],
    queryFn: () => getUserByIdFn(axiosInstance, params),
    ...options,
  });
}
