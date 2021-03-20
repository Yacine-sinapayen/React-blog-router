import React from 'react';
import Post from './Post';
import './style.scss';

// métgode BEM = Bloc Element Modifier

function Posts() {
  return (
    <main className="posts">
      <h1>Dev of Thrones</h1>
      <ul>
        <Post />
      </ul>
    </main>
  );
}

export default Posts;
