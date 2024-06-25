import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context';
import axios from 'axios';

const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get('http://localhost:5000/api/blogs');
    const result = await response.data;

    console.log(result);

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading Blogs! Please wait</h1>
      ) : (
        <div>
          {blogList.map((blogItem) => (
            <div key={blogItem._id}>
              <p>{blogItem.title}</p>
              <p>{blogItem.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
