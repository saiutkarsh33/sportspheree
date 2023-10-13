"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleTagClick = () => {
    router.push(`/tag-posts/${post.tag}`);
    console.log(post.tag)
  };
  
  
  

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='prompt_card'>
      {post && post.creator && (
        <div className='flex justify-between items-start gap-5'>
          <div
            className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
            onClick={handleProfileClick}
          >
            {post.creator.image ? (
              <Image
                src={post.creator.image}
                alt='user_image'
                width={40}
                height={40}
                className='rounded-full object-contain'
              />
            ) : (
              <span className='text-gray-400 text-sm'>No Image</span>
            )}
  
            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {post.creator.username || 'Unknown User'}
              </h3>
              <p className='font-inter text-sm text-gray-500'>
                {post.creator.email || 'Unknown Email'}
              </p>
            </div>
          </div>
        </div>
      )}
  
      {post && <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>}
      
      {post && <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={handleTagClick}
      >
        #{post.tag}
      </p>}
  
      {post && post.creator && post.creator._id && session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='green-button'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='orange-button'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
  
};

export default PromptCard;