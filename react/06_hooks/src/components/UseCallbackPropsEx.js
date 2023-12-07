import { useCallback, useEffect, useState } from "react";

export default function UseCallbackPropsEx({ postId }) {
  const [post, setPost] = useState();

  const fetchData = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h4>useCallback ver Props Example</h4>
      <div>조회한 Post ID: {postId}</div>

      {post && (
        <div>
          <div>Id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>content: {post.body}</div>
        </div>
      )}
    </>
  );
}
