 var map = L.map('map',{
  });
  map.setView([-23.5261948, -46.6393241], 18);
  L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
 }).addTo(map);
 
  var lc = L.control.locate();
  lc.addTo(map);
 
  var marker = L.marker([-23.5261948, -46.6393241]).addTo(map);
  marker.bindPopup('<b>Hello World!</b>');
  marker.on('click', function() {
    this.openPopup()
  })
 
 