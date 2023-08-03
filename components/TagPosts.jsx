import PromptCard from "./PromptCard";

const TagPosts = ({ tag, posts, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Posts with tag: {tag}</span>
      </h1>

      <div className='mt-10 prompt_layout'>
        {posts.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default TagPosts;
