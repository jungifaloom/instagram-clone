import React, { useEffect, useState } from "react";
import "./Timeline.sass";
import Post from "./posts/post";
import jsonData from "./posts.json";

export const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(jsonData.items);
  }, []);

  return (
    <div>
      <div className="timeline__posts">
        {posts.map((p) => (
          <Post
            key={p.userId}
            user={p.userId}
            caption={p.caption}
            link={p.link}
            likes={p.likes}
            time={p.timestamp}
          />
        ))}
      </div>
    </div>
  );
};
