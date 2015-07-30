

        var locations = [
          ['location 1', 39.207008, -76.862023, 'Symphony Woods Road, Suite 312 Columbia, MD 21044'],
          ['location 2', 40.047694, -82.912656, '4249 Easton Way, Suite 210 Columbus, OH 43219'],
          ['location 3', 34.028249, -77.148496, '6408 Grovedale Drive Suite 102 Alexandria, VA 22310'],
          ['location 4', 41.157533, -81.443877, '3226 Kent Road, Suite 105 Stow, OH 44224'],
          ['location 5', 38.856381, -77.336959, '11320 Random Hills Road, Suite 120A Fairfax, VA 22030']
        ];

function initialize() {

    var myOptions = {
        center: new google.maps.LatLng(39.207008, -76.862023),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("default"),
        myOptions);

    setMarkers(map, locations)

}



function setMarkers(map, locations) {

    var marker, i

    for (i = 0; i < locations.length; i++) {

        var loan = locations[i][0]
        var lat = locations[i][1]
        var long = locations[i][2]
        var add = locations[i][3]

        latlngset = new google.maps.LatLng(lat, long);

        var marker = new google.maps.Marker({
            map: map, title: loan, position: latlngset
        });
        map.setCenter(marker.getPosition())


        var content = "Loan Number: " + loan + '</h3>' + "Address: " + add

        var infowindow = new google.maps.InfoWindow()

        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            };
        })(marker, content, infowindow));

    }
}


