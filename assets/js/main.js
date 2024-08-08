function loadPartial(id, url, callback = null) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback();
      })
      .catch(error => console.error('Error loading partial:', error));
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function projectsScript() {
  fetch('data/projects.json')
    .then((response) =>  response.json())
    .then((json) => json.forEach((element) => console.log(element)));
}

document.addEventListener('DOMContentLoaded', function() {
  loadPartial('navbar', 'partials/header.html');
  loadPartial('sidebar', 'partials/sidebar.html');

  projectsScript();

  // Get the button:
  let mybutton = document.getElementById("scroll-to-top-button");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

})
