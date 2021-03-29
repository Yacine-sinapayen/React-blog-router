import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './style.scss';

// BEM = Bloc Element Modifier
function Posts({ posts }) {
  const postsList = posts.map((post) => <Post key={post.id} {...post} />);
  return (
    <main className="posts">
      <h1 className="posts__title">Dev of Thrones</h1>
      <ul className="posts__list">
        {postsList}
      </ul>
    </main>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Posts;
