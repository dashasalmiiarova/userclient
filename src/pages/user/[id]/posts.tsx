import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchPosts } from "@/redux/postsSlice";

const UserPosts = () => {
  const user = useSelector((state: RootState) => state.users.selectedUser);
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts(user));
  }, [dispatch, user]);

  return (
    <div className="w-4/5 m-auto mb-5">
      <h2 className="py-5 w-full flex justify-center text-gray-900 text-4xl font-bold">
        Posts
      </h2>
      <div className="flex gap-5 flex-col">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">
              {post.title}
            </h4>
            <p className="mb-3 font-normal text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
