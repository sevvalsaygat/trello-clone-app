import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { AxiosInstance } from "axios";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { BoardColumnsApi } from "@api";
import type { BoardColumn, ErrorResponse } from "@api";

type UseGetBoardColumnByIdPropTypes = {
  id: string;
} & RelationType;

function getBoardColumnByIdFn(
  axiosInstance: AxiosInstance,
  params: UseGetBoardColumnByIdPropTypes
) {
  const api = new BoardColumnsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_URL,
    axiosInstance
  );

  return api
    .getApiAuthenticatedBoardColumnsId(params.id, params.expand, params.embed)
    .then((response) => response.data);
}

export default function useGetBoardColumnById(
  params: UseGetBoardColumnByIdPropTypes,
  options?: UseQueryOptions<BoardColumn, AxiosError<ErrorResponse>>
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetBoardColumnById", params.id],
    queryFn: () => getBoardColumnByIdFn(axiosInstance, params),
    ...options,
  });
}
