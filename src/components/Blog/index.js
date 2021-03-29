import React from 'react';
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';

import './style.scss';

function Blog() {
  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <Posts posts={postsData} />
      <Footer />
    </div>
  );
}
export default Blog;
