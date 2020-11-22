function hamMenu() {
  var x = document.getElementById("hamscreen");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    }
}

function itemExpand(id) {
  var y = document.getElementsByClassName("item")[id - 1];
  var b = y.getElementsByClassName("item-buttoms")[0];
  if (y.style.position === "fixed") {
    y.style.position = "relative"
    y.style.width = "100%"
    y.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    y.style.margin = "auto";
  } else {
    y.style.position = "fixed"
    y.style.width = "50%"
    y.style.backgroundColor = "black";
    y.style.margin = "auto"
    b.style.display = ""
  }
}