import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from './PostsList.module.css';

export default function PostsList() {
    const resData = useLoaderData();

    return (
        <>
            {resData.length > 0 && (
                <ul className={classes.posts}>
                    {resData.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {resData.length === 0 && (
                <div className={classes.postsText}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}