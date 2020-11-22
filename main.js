function hamMenu() {
  var x = document.getElementById("hamscreen");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    }
}

function itemExpand(id) {
  var y = document.getElementsByClassName("item")[id-1];


  /*
  var b = document.getElementsByClassName("item-buttons")[id - 1];
  var d = document.getElementsByClassName("content")[0]
  */
 y.style.display = "none"
  /*
  if (y.style.position === "fixed") {
    y.style.position = "relative"
    y.style.width = "100%"
    y.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    y.style.margin = "auto";
    y.style.zIndex = "5"
    b.style.display = "none"
    d.style.backgroundColor = "transparent"
    d.style.zindex = "0"
  } else {
    y.style.position = "fixed"
    y.style.width = "50%"
    y.style.backgroundColor = "black";
    y.style.margin = "auto"
    b.style.display = "block"
    d.style.backgroundColor = "black"
    y.style.zIndex = "1"
    d.style.zindex = "4"
  }
  */
}