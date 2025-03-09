import { useParams } from "react-router-dom";
import useUsers from "../../hooks/useUsers/useUsers";
import { useEffect } from "react";

const CardUserData = () => {
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

  if (isLoadingGetUsers) {
    throw new Promise(() => {});
  }

  return (
    <div>
      <pre>{JSON.stringify(dataUserData, null, 1)}</pre>
    </div>
  );
};
export default CardUserData;
