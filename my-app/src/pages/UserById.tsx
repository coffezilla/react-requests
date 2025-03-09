import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useUsers from "../hooks/useUsers/useUsers";

import Menu from "../components/Menu";

const UserById = () => {
  const { user_id } = useParams();
  const {
    dataUserData,
    isLoadingGet: isLoadingGetUsers,
    getUserById,
  } = useUsers();

  useEffect(() => {
    if (user_id) {
      getUserById(user_id);
    }
  }, [getUserById, user_id]);

  return (
    <div>
      <h1>UserById: {user_id}</h1>
      {isLoadingGetUsers || !dataUserData ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(dataUserData, null, 1)}</pre>
      )}
      <Menu />
    </div>
  );
};

export default UserById;
