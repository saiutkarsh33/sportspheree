"use client";


import { useEffect, useState } from "react";
import { useSearchParams} from "next/navigation";

import TagPosts from "@components/TagPosts";

const TagPrompts = ({ params }) => {
  const searchParams = useSearchParams();
  
  const tag = params?.tag  

  console.log("Tag:", tag);

  const [tagPosts, setTagPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tags/${tag}/posts`);
      const data = await response.json();

      setTagPosts(data);
      console.log("Fetched posts:", data);
    };

    if (tag) fetchPosts();

  }, [tag]);

  return (
    <TagPosts
      tag={tag}
      posts={tagPosts}
    />
  );
};

export default TagPrompts;