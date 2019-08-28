import { db } from '../../main.js';

export const addPostFirebase = (email, textPost, idPost, imgPost) => db.collection('posts').add({ // agregamos datos en la colección
  email,
  textPost,
  idPost,
  imgPost
});

export const deletePost = (iduser) => db.collection('posts').doc(iduser).delete();
export const addLikeDb = (iduser, idPost, email) => db.collection('posts').doc(idPost).collection('likes').doc(iduser)
  .set({
    iduser: iduser,
    idPost: idPost,
    email,
  });
export const deleteLikeDb = (iduser, idPost) => db.collection('posts').doc(idPost).collection('likes').doc(iduser)
  .delete();
export const showLikeDb = (idPost) => db.collection('post').doc(idPost).collection('likes');

