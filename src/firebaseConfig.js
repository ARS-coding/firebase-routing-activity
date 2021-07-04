import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBwM7LG1GPeu18Xb_3kx6ZA4IpU0kaPe0",
  authDomain: "fir-routing-activity-35a5d.firebaseapp.com",
  projectId: "fir-routing-activity-35a5d",
  storageBucket: "fir-routing-activity-35a5d.appspot.com",
  messagingSenderId: "220913373782",
  appId: "1:220913373782:web:c045658538e4a47182e1f7",
  measurementId: "G-GVGKQ5MK1F"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
