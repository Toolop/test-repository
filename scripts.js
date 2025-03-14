//click yes btn
function clickYesButton() {
  alert(
    "Akuu sayang kamu bangett ayangg :(, kita beli hari selasa ya, maaf sayanggg"
  );
}

//move button on hover
function hoverNoButton() {
  // random from 0 to 1, then multiply with screen size
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  document.getElementById("no-button").style.left = x + "px";
  document.getElementById("no-button").style.top = y + "px";
}
