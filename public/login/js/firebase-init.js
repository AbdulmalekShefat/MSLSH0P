// FirebaseAuth
var config = {
    apiKey: "AIzaSyChYaSpFRbdEtBMrzX6YknLoArsKNUBakk",
    authDomain: "msl-sh0p.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com"
};
if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}