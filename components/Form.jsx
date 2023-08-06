import Link from 'next/link';

const Form = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit
}


) => {
  return (
    <section className= 'w-full max-w-full flex-start flex-col'>
        <h1 className = "head_text text-left">
        <span >{type} Post</span>
        </h1>
    <p className= "desc text-left max-w-md">
     {type} and share any sports related news, opinion or transfer rumour! What is going on in your sports world?
    </p>
    <form 
      onSubmit= {handleSubmit}
      className= 'mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
     >
        <label>
           <span className = "font-satoshi font-semibold text-base text-gray-700"> 
            Your post 
            </span>

            <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write here..'
            required
            className='form_textarea '
          />



        </label>

        <label>
           <span className = "font-satoshi font-semibold text-base text-gray-700"> 
            Tag {' '}
            <span>

            </span>
            (eg #basketball, #manchesterunited, #lebron)
            </span>

            <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            required
            className='form_input italic'
          />



        </label>

        <div className = "flex-end mx-3 mb-5 gap-4">
         <Link href= "/" className = 'text-black-text-sm px-5 py-1.5 text-sm bg-red-500 rounded-full'>
          Cancel
         </Link>

         <button
          type = "submit"
          disabled= {submitting}
          className = "px-5 py-1.5 text-sm bg-blue-400 rounded-full  text-white"
         >
            {submitting ? `${type}...` : type}

         </button>


        </div>


    </form>
    </section>
  )
}

export default Form