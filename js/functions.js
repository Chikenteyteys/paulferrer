
function myFunction() {
  var element = document.getElementById("aboutMeID");
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function myFunction2() {
  var element2 = document.getElementById("heroImageID");
  element2.scrollIntoView();
  element2.scrollIntoView(false);
  element2.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}
function hideMenuBar(){
	$(document).ready(function () {
     $(document).click(function (event) {
         var clickover = $(event.target);
         var _opened = $(".navbar-collapse").hasClass("show");
         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
             $(".navbar-toggler").click();
         }
     });
 });
}
