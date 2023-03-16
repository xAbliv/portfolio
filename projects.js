if (/Mobi/.test(navigator.userAgent)) {
    alert("This site is not mobile optimized. Objects may appear offset, disformed and/or wrong. Please view this site on a a computer to obtain the full user experience.")
  }
  
  window.addEventListener("load", function() {
      setTimeout(function() {
          document.getElementById("nav").classList.add("show");
      }, 100);
  });
  
  function previewConverter() {
    document.getElementById("converterEmbed").style.display = "block";
    document.getElementById("nav").classList.add("blur");
    document.getElementById("section").classList.add("blur");
    
  }
    function previewCalc() {
      document.getElementById("calcEmbed").style.display = "block";
      document.getElementById("nav").classList.add("blur");
      document.getElementById("section").classList.add("blur");
  }
    function previewClock() {
      document.getElementById("clockEmbed").style.display = "block";
      document.getElementById("nav").classList.add("blur");
      document.getElementById("section").classList.add("blur");
  }
  function closePreview(){
    document.getElementById("converterEmbed").style.display = "none";
    document.getElementById("calcEmbed").style.display = "none";
    document.getElementById("clockEmbed").style.display = "none";
    document.getElementById("nav").classList.remove("blur");
    document.getElementById("section").classList.remove("blur");
  }

function homeLink() {
  widnow.location = "./index.html";
}
function aboutLink() {
  window.location = "./about.html";
}
function contactLink() {
  window.location = "./contact.html";
}
