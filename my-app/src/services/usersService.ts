import { AxiosResponse, CancelTokenSource } from "axios";
import axiosInstance from "../helpers/axiosInstance";
import { IUserByIdResponse, IUsersResponse } from "./usersService.types";

export const getUsersService = async (
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<IUsersResponse>> => {
  const response = await axiosInstance.get(`/users`, {
    cancelToken: cancelToken?.token,
  });
  return response;
};

export const getUserByIdService = async (
  user_id: string,
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<IUserByIdResponse>> => {
  const response = await axiosInstance.get(`/users/${user_id}`, {
    cancelToken: cancelToken?.token,
  });

  return response;
};
