import React from 'react';

function Post() {
  return (
    <li className="post">
      <article>
        <h2 className="post__title"> Titre du post </h2> 
        <div className="post__category"> Category</div>
        <p className="post__content"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, ipsum labore amet quisquam excepturi dolores soluta alias quis ducimus rem sequi, corrupti incidunt laboriosam dicta dignissimos vero velit! Eveniet, iusto. </p>
      </article>
    </li>
  );
}

export default Post;
