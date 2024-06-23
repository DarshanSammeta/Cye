$(document).ready(function () {
  // navigation bar
  $("#nav-toggler").click(function (event) {
    $(".navbar-collapse").slideToggle(400);
  });

  // bg scroll
  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    if (pos > 100) {
      $(".navbar").addClass("cng-navbar");
    } else {
      $(".navbar").removeClass("cng-navbar");
    }
  });

  // maps

  let map;

  function initMap() {
    const location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }; // Replace with your coordinates

    map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 15, // Adjust the zoom level as needed
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Your Location", // Replace with your location name
    });
  }
});
