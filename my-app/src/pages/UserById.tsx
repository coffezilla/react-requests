import { Suspense } from "react";
import { useParams } from "react-router-dom";

import CardUserData from "../components/CardUserData/CardUserData";
import Menu from "../components/Menu";

const UserById = () => {
  const { user_id } = useParams();

  return (
    <div>
      <h1>UserById: {user_id}</h1>
      <Suspense fallback={<p>Loading suspense...</p>}>
        <CardUserData />
        <CardUserData />
        <CardUserData />
      </Suspense>
      <Menu />
    </div>
  );
};

export default UserById;
