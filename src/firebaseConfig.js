import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //  Add your own configs
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
