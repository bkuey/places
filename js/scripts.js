//Business Logic for Places
function Places(location, landmark, time) {
  this.location = location,
  this.landmark = landmark,
  this.time = time
}

Places.prototype.placeInfo = function() {
  return this.location + this.landmark + this.time;
}
//Business Logic for PlaceBook
function PlaceBook() {
  this.places = [],
  this.currentId = 0
}

PlaceBook.prototype.addPlaces = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlaceBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceBook.prototype.findPlace = function(id) {
  for (var i=0; i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

PlaceBook.prototype.deletePlace = function(id) {
  for (var i=0; i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}
// User Interface
var placeBook = new PlaceBook();


function displayPlacesDetails(placeBookToDisplay) {
  var placesList = $("ul#places");
  var htmlForPlacesInfo = "";
  placeBookToDisplay.places.forEach(function(place) {
    htmlForPlacesInfo += "<li id=" + place.id + ">" + place.location + place.landmark + place.time + "</li>";
  });
  placesList.html(htmlForPlacesInfo);
};

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#newLocation").val();
    console.log(inputtedLocation);
    var inputtedLandmark = $("input#newLandmark").val();
    var inputtedTime = $("input#newTime").val();
    var userInfo = new Places(inputtedLocation, inputtedLandmark, inputtedTime);
    placeBook.addPlaces(userInfo);
    displayPlacesDetails(placeBook);
    console.log(placeBook.places);
  })
})
