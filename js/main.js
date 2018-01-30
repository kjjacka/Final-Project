  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-vJBl9MTUyf71DcBzt3oZf78fh22BnNQ",
    authDomain: "final-project-959b5.firebaseapp.com",
    databaseURL: "https://final-project-959b5.firebaseio.com",
    projectId: "final-project-959b5",
    storageBucket: "",
    messagingSenderId: "146378051273"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var reservationData = {};

$('.btn').on('submit', function(e){
  e.preventDefault();

  reservationData.name = $('#inputName').val();

  var reservationReference = database.ref('reservations');

  reservationsReference.push(reservationData);
});