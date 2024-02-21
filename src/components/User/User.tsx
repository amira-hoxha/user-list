import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { fetchUserPosts } from "../../services/api";
import UserPost, { UserPostProps } from "../UserPost/UserPost";
import Avatar from "../Avatar/Avatar";

export interface UserProps {
  firstName: string;
  lastName: string;
  image?: string;
  email?: string;
  age?: number;
  id: number;
}

const User: React.FC<UserProps> = ({
  firstName,
  email,
  age,
  id,
  lastName,
  image,
}) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userPosts, setUserPosts] = useState<UserPostProps[]>([]);

  const fetchData = async (id: number) => {
    try {
      const userPosts = await fetchUserPosts(id);
      setUserPosts(userPosts);
      setShowUserDetails(true);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="flex flex-col p-3 border-2 border-slate-700 rounded-xl my-2 mx-4  ">
      <div className="flex flex-col md:flex-row w-100 text-center items-center md:text-left relative items-between content-between justify-between text-lg ">
        <Avatar height="30" width="30" imageUrl={image} />
        <span className="md:w-1/4">{`${firstName} ${lastName}`}</span>
        <span className="md:w-1/4">Email: {email}</span>
        <span className="md:w-1/4">Age: {age}</span>
        {showUserDetails ? (
          <div className="flex justify-center md:justify-normal my-auto">
            Hide posts{" "}
            <ArrowUpCircleIcon
              className="h-5 w-5 ml-2 my-auto"
              onClick={() => setShowUserDetails(!showUserDetails)}
            />
          </div>
        ) : (
          <div className="flex justify-center md:justify-normal my-auto">
            Show posts
            <ArrowDownCircleIcon
              className="h-5 w-5 ml-2 my-auto"
              onClick={() => fetchData(id)}
            />
          </div>
        )}
      </div>
      {showUserDetails &&
        userPosts?.map((post: UserPostProps) => (
          <UserPost
            key={post.id}
            className="pt-3 text-xs"
            title={post.title}
            body={post.body}
            tags={post.tags}
          />
        ))}
    </div>
  );
};

export default User;
