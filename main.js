const options = {
    enableHighAccuracy: true, 
    // Get high accuracy reading, if available (default false)
    timeout: 5000, 
    // Time to return a position successfully before error (default infinity)
    maximumAge: 2000, 
    // Milliseconds for which it is acceptable to use cached position (default 0)
};

navigator.geolocation.watchPosition(success, error, options);
// Fires success function immediately and when user position changes

function success(pos) {
    console.log(pos)
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy; // Accuracy in metres
    console.log(lat,lng)
}

function error(err) {

    if (err.code === 1) {
        alert("Please allow geolocation access");
        // Runs if user refuses access
    } else {
        alert("Cannot get current location");
        // Runs if there was a technical problem.
    }

}