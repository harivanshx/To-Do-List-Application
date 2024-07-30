document.addEventListener("DOMContentLoaded", function() {
  let mybutton = document.getElementById("myBtn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


    }
  });
});
