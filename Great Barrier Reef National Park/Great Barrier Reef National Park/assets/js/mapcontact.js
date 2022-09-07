// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 21.028690502555744, lng: 105.7822708022257 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}