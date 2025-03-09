import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError, CancelTokenSource } from "axios";

import {
  IUserByIdResponse,
  IUsersResponse,
} from "../../services/usersService.types";
import {
  getUserByIdService,
  getUsersService,
} from "../../services/usersService";

const useUsers = () => {
  const [dataUsers, setDataUsers] = useState<
    IUsersResponse["users"] | undefined
  >(undefined);
  const [dataUserData, setDataUserData] = useState<
    IUserByIdResponse | undefined
  >(undefined);
  const [isLoadingGet, setIsLoadingGet] = useState(false);
  const [CancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null);

  // get
  const getUsers = useCallback(() => {
    const source = axios.CancelToken.source();
    setIsLoadingGet(true);
    setCancelTokenSource(source);

    getUsersService(source)
      .then((responseUsers) => {
        setDataUsers(responseUsers.data.users);
      })
      .catch((error: AxiosError) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setIsLoadingGet(false);
      });

    return () => {
      source.cancel("Operation canceled by the user");
    };
  }, []);

  // get by id
  const getUserById = useCallback((user_id: string) => {
    const source = axios.CancelToken.source();
    setIsLoadingGet(true);
    setCancelTokenSource(source);

    getUserByIdService(user_id, source)
      .then((responseUsers) => {
        setDataUserData(responseUsers.data);
      })
      .catch((error: AxiosError) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setIsLoadingGet(false);
      });

    return () => {
      source.cancel("Operation canceled by the user");
    };
  }, []);

  useEffect(() => {
    return () => {
      if (CancelTokenSource) {
        CancelTokenSource.cancel("Operation canceled by the user");
      }
    };
  }, [CancelTokenSource]);

  return {
    dataUsers,
    dataUserData,
    getUsers,
    getUserById,
    isLoadingGet,
  };
};

export default useUsers;
