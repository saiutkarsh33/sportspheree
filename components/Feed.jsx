'use client';

import { useState, useEffect } from 'react'

import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {

   return (
     
    <div className = "mt-16 prompt_layout">
       { data.map((post) => (
         <PromptCard 

          key = {post._id}
          post= {post}
          handleTagClick = {handleTagClick}
         
         
         />


       ))


       }

    </div>

   )


}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  
  // regex is a way fr u to see if the text matches.


  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  // This is the function that actually gets the data 

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <section className = "feed">

<h2 className = "feed_text -mt-12 tag_gradient"> Your Feed</h2>

<form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag, username or keywords'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
        


        {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          
        />
      ) : (
        <PromptCardList data={posts}  />
      )}
    </section>
  )
}

export default Feed