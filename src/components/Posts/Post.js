import React from 'react';
import PropTypes from 'prop-types';

function Post({ title, category, excerpt }) {
  return (
    <li className="post">
      <article>
        <h2 className="post__title"> {title} </h2>
        <div className="post__category"> {category} </div>
        <p className="post__content"> {excerpt} </p>
      </article>
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
