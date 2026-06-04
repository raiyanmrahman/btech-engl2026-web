/* 
Raiyan Mohammad Rahman & Talha Nadeem
btech-engl2026-web scripts
sourced from w3schools
*/
function useAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
function openTab(id) {
  var i;
  var x = document.getElementsByClassName("maptab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}