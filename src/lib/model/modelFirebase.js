 
 export const signInWithEmailAndPassword  = (email, pass) =>{  
   return firebase.auth().signInWithEmailAndPassword(email, pass);
}
export const signInGoogle = ()=>{
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
export const signInFacebook = ()=>{
    return  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
}