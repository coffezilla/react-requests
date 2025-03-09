import { useEffect } from "react";
import Menu from "../components/Menu";
import useUsers from "../hooks/useUsers/useUsers";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const { dataUsers, getUsers, isLoadingGet: isLoadingGetUsers } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <h1>Users {id}</h1>
      {isLoadingGetUsers || !dataUsers ? (
        <p>Loading...</p>
      ) : dataUsers.length > 0 ? (
        <ul>
          {dataUsers.map((user) => {
            return (
              <li>
                <Link to={`/users/${user.id}`}>
                  {user.id}: {user.name}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>0 result</p>
      )}
      {/* <pre>{JSON.stringify(dataUsers, null, 1)}</pre> */}
      <Menu />
    </div>
  );
};

export default Users;
