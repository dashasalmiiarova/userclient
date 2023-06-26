import { fetchAlbums } from "@/redux/albumsSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { SetStateAction, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Modal = ({
  setModal,
}: {
  setModal: (value: SetStateAction<boolean>) => void;
}) => {
  const user = useSelector((state: RootState) => state.users.selectedUser);
  const albums = useSelector((state: RootState) => state.albums);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAlbums(user));
  }, [dispatch, user]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm overflow-y-scroll"
      onClick={() => setModal(false)}
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-4/5 m-auto">
          <div
            onClick={() => setModal(false)}
            className="w-full p-3 flex justify-end cursor-pointer text-lg font-bold"
          >
            X
          </div>
          <div className="flex gap-2 flex-col p-5 pt-0">
            {albums.map((album) => (
              <div
                key={album.id}
                className="p-3 bg-white border border-gray-200 rounded-lg shadow"
              >
                <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 capitalize">
                  {album.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
