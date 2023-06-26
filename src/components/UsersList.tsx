import { useDispatch, useSelector } from "react-redux";
import { User, fetchUsers, selectUser } from "../redux/userSlice";
import { AppDispatch, RootState } from "../redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

export const UserList = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [modal, setModal] = useState<boolean>(false);

  const handleUserSelect = (userId: number) => {
    dispatch(selectUser(userId));
  };

  const handleAlbumClick = (userId: number) => {
    handleUserSelect(userId);
    setModal(true);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="w-4/5 m-auto mt-10 bg-white">
      <ul className=" ">
        {users.map((user: User) => (
          <li key={user.id} className="mb-5 rounded overflow-hidden shadow-lg ">
            <div className="px-6 py-4">
              <div className="text-gray-700 font-bold text-xl mb-2">
                {user.name}
              </div>
              <p className="text-gray-700 text-base">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-gray-700 text-base">
                <strong>City:</strong> {user.address.city}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700 text-base">
                <strong>City:</strong> {user.company.name}
              </p>
            </div>
            <div className="px-6 py-4 box-border flex gap-3">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base"
                onClick={() => handleUserSelect(user.id)}
                href={`/user/${user.id}/posts`}
              >
                Posts
              </Link>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base"
                onClick={() => handleAlbumClick(user.id)}
              >
                Albums
              </button>
            </div>
          </li>
        ))}
      </ul>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
};
