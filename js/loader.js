$(document).ready(function() {
    $("#loader").load("loader.html")
    // Fakes the loading setting a timeout
      setTimeout(function() {
              document.querySelector('.loader1').style.display = "none";
      }, 1500);
  });
  $(function(){
    setTimeout(() => {
      document.querySelector('#post-loader').style.display = "block";
      $("#header").load("header.html");
      $("#footer").load("footer.html")
    }, 800);
      
});