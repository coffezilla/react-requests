import { useEffect } from "react";
import Menu from "../components/Menu";
import useUsers from "../hooks/useUsers/useUsers";

const Users = () => {
  const { dataUsers, getUsers, isLoadingGet: isLoadingGetUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <h1>Users</h1>
      {isLoadingGetUsers ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(dataUsers, null, 1)}</pre>
      )}
      <Menu />
    </div>
  );
};

export default Users;
