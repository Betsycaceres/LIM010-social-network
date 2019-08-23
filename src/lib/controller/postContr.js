import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase} from '../model/modelPost.js';
import { db } from '../../main.js';

export const textPost = () => {
  event.preventDefault();
  const txtpublicacion = document.getElementById('publicacion').value
  // document.querySelector('#publicacion').value;
  addPostFirebase(userCurrent().email, txtpublicacion, userCurrent().uid) // pinta en el home
    .then((res) => {
      document.querySelector('#publicacion').value = "";
      console.log('Document written with ID: ', res.id);
    })
    .catch(() => {
      // console.error('Error adding document: ', error);
    });
}
export const getPost = (datapost) => {
  event.preventDefault();
  db.collection('posts')
    .onSnapshot((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() })
        console.log({ id: doc.id, ...doc.data() });
      });
      datapost(array);
    });
};

// export const deletePost = () => {
//   deletePosts()
//   .then(function () {
//     console.log("Post eliminado");
//   }).catch(function (error) {
//     console.error("Error removing document: ", error);
//   });
// }


