/* eslint-disable arrow-body-style */
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';

import './style.scss';

function Blog() {
  // eslint-disable-next-line arrow-body-style
  const routes = categoriesData.map((category) => {
  // Par default je vais placer toutes les données des posts dans postsList
  let postsList = postsData;

    // on va filtrer les posts par  category
    // le point en commun entre les objets de catégories
    // et les objets de post : propriété category.label et
    // propriété post.category
    if(category.label !== 'Accueil') {
      postsList = postsData.filter((post) => {
        // ici je détermine si je category.label est égal à post.category
        return post.category === category.label;
      });
    }

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
      {routes}
      {/* <Posts posts={postsData} /> */}
      <Footer />
    </div>
  );
}
export default Blog;
