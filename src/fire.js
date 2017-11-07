import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDXMHXqHHKql0Pr0FdzcNMAE1ldu8gtFUo",
    authDomain: "quanto-assisti-anime-react.firebaseapp.com",
    databaseURL: "https://quanto-assisti-anime-react.firebaseio.com",
    projectId: "quanto-assisti-anime-react",
    storageBucket: "quanto-assisti-anime-react.appspot.com",
    messagingSenderId: "1066596651927"
};
var fire = firebase.initializeApp(config);
export default fire;