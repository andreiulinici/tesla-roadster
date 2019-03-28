(function () {
  window.onscroll = function () {
    animateOnScroll()
  };

  function animateOnScroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("ytvideo").className = "scroll-reveal-active";
    }

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      document.getElementById("stats").className = "scroll-reveal-active";
    }

    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
      document.getElementById("aero").className = "scroll-reveal-active";
    }

    if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
      document.getElementById("interior").className = "scroll-reveal-active";
    }

    if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
      document.getElementById("topview").className = "scroll-reveal-active";
    }

    if (document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400) {
      document.getElementById("bottom-section").className = "scroll-reveal-active";
    }
  }
  
  function scrollToSection() {
	document.getElementById('ytvideo').scrollIntoView({
	  behavior: "smooth"
	});
  }

  var arrowEl = document.getElementsByClassName("arrow-down")[0];
  arrowEl.addEventListener("click", scrollToSection, false);
})()