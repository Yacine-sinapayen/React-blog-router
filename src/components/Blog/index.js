import React from 'react';
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

import './style.scss';

function Blog() {
  return (
    <div className="blog">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
export default Blog;
