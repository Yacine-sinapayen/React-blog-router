import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import { getPostsByCategory } from 'src/selectors';

import './style.scss';

function Blog() {
  // eslint-disable-next-line arrow-body-style
  const routes = categoriesData.map((category) => {
    const postsList = getPostsByCategory(category.label, postsData);
    return (
      <Route
        path={category.route}
        key={category.route}
        exact
      >
        <Posts posts={postsList} />
      </Route>
    );
  });

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <Switch>
        {routes}
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default Blog;
