import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { ProfileApi } from "@api";
import type { User, ErrorResponse } from "@api";

function getCurrentUserFn(axiosInstance: AxiosInstance) {
  const api = new ProfileApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api.getApiAuthenticatedMe().then((response) => response.data);
}

export default function useGetCurrentUser(
  options?: UseQueryOptions<User, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetCurrentUser"],
    queryFn: () => getCurrentUserFn(axiosInstance),
    ...options,
  });
}
