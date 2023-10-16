import { AxiosError } from "axios";

import { ErrorResponse } from "@api";

function extractApiErrors(error: AxiosError<ErrorResponse, any> | null) {
  if (!error) {
    return [];
  }

  return error.response?.data.errors || [];
}

export default { extractApiErrors };
