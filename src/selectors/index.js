/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
export const getPostsByCategory = (category, posts) => {
  // Par default je vais placer toutes les données des posts dans postsList
  let postsList = posts;

  // on va filtrer les posts par  category
  // le point en commun entre les objets de catégories
  // et les objets de post : propriété category.label et
  // propriété post.category
  if (category !== 'Accueil') {
    postsList = posts.filter((post) => {
      // ici je détermine si je category est égal à post.category
      return post.category === category;
    });
  }
  return postsList;
};
