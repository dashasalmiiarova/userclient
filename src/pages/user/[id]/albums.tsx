import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAlbums } from "@/redux/albumsSlice";

const UserAlbums = () => {
  const user = useSelector((state: RootState) => state.users.selectedUser);
  const albums = useSelector((state: RootState) => state.albums);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAlbums(user));
  }, [dispatch, user]);

  return (
    <div className="w-4/5 m-auto mb-5">
      <h2 className="py-5 w-full flex justify-center text-gray-900 text-4xl font-bold">
        Albums
      </h2>
      <div className="flex gap-5 flex-col">
        {albums.map((album) => (
          <div
            key={album.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow"
          >
            <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 capitalize">
              {album.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAlbums;
