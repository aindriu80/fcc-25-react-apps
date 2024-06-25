import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context';
import axios from 'axios';
import classes from './styles.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get('http://localhost:5000/api/blogs');
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    console.log('currentId: ', getCurrentId);

    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`,
    );
    const result = await response.data;

    if (result?.message) {
      fetchListOfBlogs();
    }
  }

  async function handleEditBlog() {}

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading Blogs! Please wait</h1>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem._id}>
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <FaEdit
                  onClick={() => handleEditBlog(blogItem._id)}
                  size={30}
                />
                <FaTrash
                  size={30}
                  onClick={() => handleDeleteBlog(blogItem._id)}
                />
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
