"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TagPosts from "@components/TagPosts";

const TagPrompts = () => {
  const router = useRouter();

  // Define tag after checking if the router is ready
  const tag = "MM7"

  console.log("Tag:", tag);

  const [tagPosts, setTagPosts] = useState([]);

  useEffect(() => {
    if (!router.isReady) return; // Exit early if the router is not ready

    const fetchPostsByTag = async () => {
      if (tag) {
        const response = await fetch(`/api/tags/${tag}/posts`);
        const data = await response.json();

        setTagPosts(data);
      }
    };

    fetchPostsByTag();
  }, [tag, router.isReady]); // Refetch posts when tag changes or router becomes ready

  return (
    <TagPosts
      tag={tag}
      posts={tagPosts}
    />
  );
};

export default TagPrompts;