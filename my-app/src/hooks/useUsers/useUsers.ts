import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError, CancelTokenSource } from "axios";

import { IUserResponse } from "../../services/usersService.types";
import { getUsersService } from "../../services/usersService";

const useUsers = () => {
  const [dataUsers, setDataUsers] = useState<IUserResponse[] | []>([]);
  const [isLoadingGet, setIsLoadingGet] = useState(false);
  const [CancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null);

  // get
  const getUsers = useCallback(() => {
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    setIsLoadingGet(true);
    getUsersService(source)
      .then((responseUsers) => {
        setDataUsers(responseUsers.data);
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
      source.cancel("OPeration canceled by the user");
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
    getUsers,
    isLoadingGet,
  };
};

export default useUsers;
