var StartOfHTML = function() {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;

  var AllContainers = document.getElementsByClassName("container-fluid");
  for (let i = 0; i < AllContainers.length; i++) {
    AllContainers[i].style.height = `${newHeight}px`;
  }
}

var ScollFunc1 = function() {
    var height = window.innerHeight;
    var y = window.scrollY;
    // if (y <= height) {
    //     document.getElementsByClassName("navbar")[0].style.visibility = "hidden";
    //   }
    if (y > height) {
        document.getElementsByClassName("LeftB1")[0].style.width = "0%";
        document.getElementsByClassName("LeftB1")[1].style.width = "0%";
        document.getElementsByClassName("LeftB1")[2].style.width = "0%";
        document.getElementsByClassName("LeftB1")[3].style.width = "0%";
        document.getElementsByClassName("LeftB1")[4].style.width = "0%";
        document.getElementsByClassName("LeftB1")[5].style.width = "0%";
        //document.getElementsByClassName("navbar")[0].style.visibility = "visible";
    }
    if (y > height * 2) {
        document.getElementsByClassName("LeftB1")[6].style.width = "0%";
        document.getElementsByClassName("LeftB1")[7].style.width = "0%";
        document.getElementsByClassName("LeftB2")[0].style.width = "0%";
        document.getElementsByClassName("LeftB2")[1].style.width = "0%";
    }
    if (y >= height * 3) {
        document.getElementsByClassName("LeftB1")[8].style.width = "0%";
        document.getElementsByClassName("LeftB1")[9].style.width = "0%";
        document.getElementsByClassName("LeftB1")[10].style.width = "0%";
        document.getElementsByClassName("LeftB1")[11].style.width = "0%";
        document.getElementsByClassName("LeftB2")[2].style.width = "0%";
    }
  };

window.addEventListener("DOMContentLoaded", ScollFunc1);
window.addEventListener("DOMContentLoaded", StartOfHTML);
window.addEventListener("scroll", ScollFunc1);