import React from "react";

export interface PostType {
  title: string;
}
export type PostsType = [PostType];

interface PostsProps {
  posts: PostsType;
}

const Posts = (props: PostsProps) => (
  <ul>
    {props.posts.map((post, i) => (
      <li key={i}>{post.title}</li>
    ))}
  </ul>
);

export default Posts;
