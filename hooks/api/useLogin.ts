import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { AuthApi } from "@api";
import type {
  ErrorResponse,
  UserLoginRequest,
  AuthenticationResponse,
} from "@api";

function loginFn(
  userLoginRequest: UserLoginRequest,
  axiosInstance: AxiosInstance
) {
  const api = new AuthApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .postApiAuthLogin(userLoginRequest)
    .then((response) => response.data);
}

export default function useLogin(
  props: MutateOptions<
    AuthenticationResponse,
    AxiosError<ErrorResponse>,
    UserLoginRequest
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useLogin"],
    mutationFn: (userLoginRequest: UserLoginRequest) =>
      loginFn(userLoginRequest, axiosInstance),
    ...props,
  });
}
