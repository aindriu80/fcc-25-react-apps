import React from 'react';
import './styles.css';

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="">
        <div className="">
          <a href={`https://github.com/com/${login}`}>{name || login}</a>
          <p>
            User joined on{' '}
            {`${createdDate.getDate()} ${createdDate.toLocaleString('ga-ie', { month: 'long' })} ${createdDate.getFullYear()}`}
          </p>
        </div>
      </div>
      <div>
        <div className="heading">Public repos</div>
        <p>{public_repos}</p>
      </div>
      <div>
        <div className="heading">Followers</div>
        <p>{followers}</p>
      </div>
      <div>
        <div className="heading">Following</div>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default User;
