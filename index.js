let homeScore = 0;
let guestScore = 0;

homeScoreEl = document.getElementById("home-point-text");
guestScoreEl = document.getElementById("guest-point-text");
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function addHomeScore(addon){
    homeScore += addon;
    homeScoreEl.textContent = homeScore;
}

function addGuestScore(addon){
    guestScore += addon;
    guestScoreEl.textContent = guestScore;
}