  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-button").forEach((button) => {
      const targetId = button.getAttribute("data-target-id");
      const collapseElement = document.getElementById(targetId);

      collapseElement.addEventListener("show.bs.collapse", function () {
        button.textContent = "Read Less";
      });

      collapseElement.addEventListener("hide.bs.collapse", function () {
        button.textContent = "Read More";
      });
    });
  });


