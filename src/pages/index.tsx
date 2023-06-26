import { Fragment } from "react";
import { UserList } from "@/components/UsersList";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state: RootState) => state.users.selectedUser);
  return (
    <Fragment>
      <UserList />
    </Fragment>
  );
};

export default Home;
