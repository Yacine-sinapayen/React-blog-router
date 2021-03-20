import React from 'react';
import Post from './Post';
import './style.scss';

// BEM = Bloc Element Modifier
function Posts() {
  return (
    <main className="posts">
      <h1 className="posts__title">Dev of Thrones</h1>
      <ul className="posts__list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </main>
  );
}
export default Posts;
