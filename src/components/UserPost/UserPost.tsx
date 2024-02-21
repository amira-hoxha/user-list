import React from "react";
import Tag from "../tag/Tag";

export interface UserPostProps {
  id?: number;
  title: string;
  body: string;
  className?: string;
  tags: string[];
}

const UserPost: React.FC<UserPostProps> = ({
  title,
  body,
  className,
  tags,
}) => {
  return (
    <>
      <hr className="mt-3" />
      <div className={`${className} pl-3`}>
        <div className="text-[16px] font-semibold pb-2">Title: {title}</div>
        <div>{body}</div>
        <div className="flex space-x-2">
          {tags.map((item) => (
            <Tag description={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPost;
