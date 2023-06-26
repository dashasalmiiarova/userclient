import { useDispatch, useSelector } from "react-redux";
import { User, fetchUsers, selectUser } from "../redux/userSlice";
import { AppDispatch, RootState } from "../redux/store";
import Link from "next/link";
import { useEffect } from "react";

export const UserList = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();

  const handleUserSelect = (userId: number) => {
    dispatch(selectUser(userId));
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
                <strong>Address:</strong> {user.address.city}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700 text-base">
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
            <div className="px-6 py-4">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleUserSelect(user.id)}
                href={`/user/${user.id}/posts`}
              >
                Posts
              </Link>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleUserSelect(user.id)}
                href={`/user/${user.id}/albums`}
              >
                Albums
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
