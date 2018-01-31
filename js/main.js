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


$(window).scroll(function(){
    $(".main-image").css("opacity", 1 - $(window).scrollTop() / 600);
  });

var database = firebase.database();

var reservationData = {};

$('.reservation-day li').on('click', function(){
  reservationData.day = $(this).text();
  $('#dropdownMenu1').html($(this).text());
  }
);

$('.reservation-form').on('submit', function(event){
  event.preventDefault();
  
  reservationData.name = $('.reservation-name').val();
  
  var reservationsReference = database.ref('reservations');
  
  reservationsReference.push(reservationData);
});

function getReservations(){
  
  database.ref('reservations').on('value', function(results){
    var allReservations = results.val();
    $('.reservations').empty();
    
    for( var reservation in allReservations){
      var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
      };
      
      var source = $("#reservation-template").html();
      var template = Handlebars.compile(source);
      var reservationListItem = template(context);
      $('.reservations').append(reservationListItem);
    }
  });
}

getReservations();

