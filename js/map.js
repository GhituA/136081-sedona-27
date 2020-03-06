function initMap() {
  var sedona = {lat: 34.869, lng: -111.760};
  var map = new google.maps.Map(document.querySelector(".index-map"), {zoom: 9, center: sedona});
  var marker = new google.maps.Marker({position: sedona, map: map});
}
