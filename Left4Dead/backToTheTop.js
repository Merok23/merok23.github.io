function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  document.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 100) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });
  