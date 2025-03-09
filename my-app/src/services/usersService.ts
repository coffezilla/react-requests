import { AxiosResponse, CancelTokenSource } from "axios";
import axiosInstance from "../helpers/axiosInstance";
import { IUserResponse } from "./usersService.types";

export const getUsersService = async (
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<IUserResponse[]>> => {
  const response = await axiosInstance.get(`/users`, {
    cancelToken: cancelToken?.token,
  });
  return response;
};
