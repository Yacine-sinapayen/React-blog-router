import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import { getPostsByCategory } from 'src/selectors';

import './style.scss';

function Blog() {

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);


  // eslint-disable-next-line arrow-body-style
  const routes = categoriesData.map((category) => {
    const postsList = getPostsByCategory(category.label, posts);
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
  const loadData = () => {
    setLoading(true);
    // je simule le chargement de données
    setTimeout(() => {
      console.log('ici je veux changer mon state');
      setPosts(postsData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <button type="button" onClick={loadData}> Load Data </button>
      { loading && <div>Chargement des données ...</div>}
      {!loading && (
      <Switch>
        {routes}
        <Redirect from="/jquery" to="/autre" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
      )}
      <Footer />
    </div>
  );
}
export default Blog;
