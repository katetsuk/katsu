$(document).ready(function() {
    $("#first-square").addClass("animated");
    $("#first-rect").addClass("animated");
    $("#first-para").addClass("animated");
    $("#second-para").addClass("animated");
    $("#second-square").addClass("animated");
    $("#third-para").addClass("animated");
    $("#text-about").addClass("animated");
    $("#text-projects").addClass("animated");
    $("#fourth-para").addClass("animated");
    $("#fifth-para").addClass("animated");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
          }
        });
      });
      observer.observe(document.querySelector('#third-square'));

      const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
          }
        });
      });
      observer2.observe(document.querySelector('#sixth-para'));

      const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
          }
        });
      });
      observer3.observe(document.querySelector('#seventh-para'));

      const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
          }
        });
      });
      observer4.observe(document.querySelector('#text-contacts'));

      const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
          }
        });
      });
      observer5.observe(document.querySelector('#fourth-square'));

});