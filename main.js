function updateUTCTime() {
    document.getElementById("utc-time").textContent = 
    new Date().toUTCString().replace("GMT", "UTC");
}
updateUTCTime();

