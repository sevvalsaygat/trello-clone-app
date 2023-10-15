import { useMutation, type MutateOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { AuthApi } from "@api";
import type {
  UserRegisterRequest,
  AuthenticationResponse,
  ErrorResponse,
} from "@api";

function registerFn(
  userRegisterRequest: UserRegisterRequest,
  axiosInstance: AxiosInstance
) {
  const api = new AuthApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .postApiAuthRegister(userRegisterRequest)
    .then((response) => response.data);
}

export default function useRegister(
  props: MutateOptions<
    AuthenticationResponse,
    AxiosError<ErrorResponse>,
    UserRegisterRequest
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useRegister"],
    mutationFn: (userRegisterRequest: UserRegisterRequest) =>
      registerFn(userRegisterRequest, axiosInstance),
    ...props,
  });
}
