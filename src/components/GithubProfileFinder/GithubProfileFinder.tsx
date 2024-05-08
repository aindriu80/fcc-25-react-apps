import React, { useEffect, useState } from 'react';
import './styles.css';
import User from './User';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div className="loading">Loading data! Please wait...</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <header>Github Profile </header>
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className="search-by-username"
        />
        <button onClick={handleSubmit} className="button">
          Search
        </button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
