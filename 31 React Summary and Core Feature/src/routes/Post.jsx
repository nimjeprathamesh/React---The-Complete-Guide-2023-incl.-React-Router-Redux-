import React from "react";
import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

export default function Post() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  console.log(resData);
  return resData.posts;
}
