function Valtas(evt, menupontID) {
    var i, content, menupont;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    menupont = document.getElementsByClassName("menupont");
    for (i = 0; i < menupont.length; i++) {
      menupont[i].className = menupont[i].className.replace(" active", "");
    }
    document.getElementById(menupontID).style.display = "block";
    evt.currentTarget.className += " active";
  }